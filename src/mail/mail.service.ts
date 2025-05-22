import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
  constructor(private readonly mailerService: NestMailerService) {}

  async sendMail(
    to: string,
    subject: string,
    templateName: string,
    context: Record<string, any>,
  ) {
    await this.mailerService.sendMail({
      to,
      subject,
      template: templateName,
      context: {
        ...context,
        appName: process.env.APP_NAME,
        year: new Date().getFullYear(),
      },
    });
  }
}
