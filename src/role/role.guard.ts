import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

interface User {
  userRole: {
    role: {
      name: string;
    };
  };
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true; // if there aren't roles defined then give access
    }

    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as User;

    if (!user || !user.userRole || !user.userRole.role) {
      return false; // Deny access if user or role information is missing
    }

    return requiredRoles.some((role) => user.userRole.role.name === role);
  }
}
