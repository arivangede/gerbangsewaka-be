
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model RoadFunction
 * 
 */
export type RoadFunction = $Result.DefaultSelection<Prisma.$RoadFunctionPayload>
/**
 * Model StreetLighting
 * 
 */
export type StreetLighting = $Result.DefaultSelection<Prisma.$StreetLightingPayload>
/**
 * Model Lamp
 * 
 */
export type Lamp = $Result.DefaultSelection<Prisma.$LampPayload>
/**
 * Model StreetLightingAccessory
 * 
 */
export type StreetLightingAccessory = $Result.DefaultSelection<Prisma.$StreetLightingAccessoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StreetLightingStatus: {
  Active: 'Active',
  Inactive: 'Inactive',
  UnderMaintenance: 'UnderMaintenance'
};

export type StreetLightingStatus = (typeof StreetLightingStatus)[keyof typeof StreetLightingStatus]

}

export type StreetLightingStatus = $Enums.StreetLightingStatus

export const StreetLightingStatus: typeof $Enums.StreetLightingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roadFunction`: Exposes CRUD operations for the **RoadFunction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoadFunctions
    * const roadFunctions = await prisma.roadFunction.findMany()
    * ```
    */
  get roadFunction(): Prisma.RoadFunctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streetLighting`: Exposes CRUD operations for the **StreetLighting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreetLightings
    * const streetLightings = await prisma.streetLighting.findMany()
    * ```
    */
  get streetLighting(): Prisma.StreetLightingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lamp`: Exposes CRUD operations for the **Lamp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lamps
    * const lamps = await prisma.lamp.findMany()
    * ```
    */
  get lamp(): Prisma.LampDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streetLightingAccessory`: Exposes CRUD operations for the **StreetLightingAccessory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreetLightingAccessories
    * const streetLightingAccessories = await prisma.streetLightingAccessory.findMany()
    * ```
    */
  get streetLightingAccessory(): Prisma.StreetLightingAccessoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Area: 'Area',
    RoadFunction: 'RoadFunction',
    StreetLighting: 'StreetLighting',
    Lamp: 'Lamp',
    StreetLightingAccessory: 'StreetLightingAccessory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "userRole" | "area" | "roadFunction" | "streetLighting" | "lamp" | "streetLightingAccessory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      RoadFunction: {
        payload: Prisma.$RoadFunctionPayload<ExtArgs>
        fields: Prisma.RoadFunctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadFunctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadFunctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>
          }
          findFirst: {
            args: Prisma.RoadFunctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadFunctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>
          }
          findMany: {
            args: Prisma.RoadFunctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>[]
          }
          create: {
            args: Prisma.RoadFunctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>
          }
          createMany: {
            args: Prisma.RoadFunctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoadFunctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>[]
          }
          delete: {
            args: Prisma.RoadFunctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>
          }
          update: {
            args: Prisma.RoadFunctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>
          }
          deleteMany: {
            args: Prisma.RoadFunctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadFunctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoadFunctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>[]
          }
          upsert: {
            args: Prisma.RoadFunctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadFunctionPayload>
          }
          aggregate: {
            args: Prisma.RoadFunctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoadFunction>
          }
          groupBy: {
            args: Prisma.RoadFunctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadFunctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadFunctionCountArgs<ExtArgs>
            result: $Utils.Optional<RoadFunctionCountAggregateOutputType> | number
          }
        }
      }
      StreetLighting: {
        payload: Prisma.$StreetLightingPayload<ExtArgs>
        fields: Prisma.StreetLightingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreetLightingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreetLightingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>
          }
          findFirst: {
            args: Prisma.StreetLightingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreetLightingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>
          }
          findMany: {
            args: Prisma.StreetLightingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>[]
          }
          create: {
            args: Prisma.StreetLightingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>
          }
          createMany: {
            args: Prisma.StreetLightingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreetLightingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>[]
          }
          delete: {
            args: Prisma.StreetLightingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>
          }
          update: {
            args: Prisma.StreetLightingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>
          }
          deleteMany: {
            args: Prisma.StreetLightingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreetLightingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreetLightingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>[]
          }
          upsert: {
            args: Prisma.StreetLightingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingPayload>
          }
          aggregate: {
            args: Prisma.StreetLightingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreetLighting>
          }
          groupBy: {
            args: Prisma.StreetLightingGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreetLightingGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreetLightingCountArgs<ExtArgs>
            result: $Utils.Optional<StreetLightingCountAggregateOutputType> | number
          }
        }
      }
      Lamp: {
        payload: Prisma.$LampPayload<ExtArgs>
        fields: Prisma.LampFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LampFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LampFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>
          }
          findFirst: {
            args: Prisma.LampFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LampFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>
          }
          findMany: {
            args: Prisma.LampFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>[]
          }
          create: {
            args: Prisma.LampCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>
          }
          createMany: {
            args: Prisma.LampCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LampCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>[]
          }
          delete: {
            args: Prisma.LampDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>
          }
          update: {
            args: Prisma.LampUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>
          }
          deleteMany: {
            args: Prisma.LampDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LampUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LampUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>[]
          }
          upsert: {
            args: Prisma.LampUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LampPayload>
          }
          aggregate: {
            args: Prisma.LampAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLamp>
          }
          groupBy: {
            args: Prisma.LampGroupByArgs<ExtArgs>
            result: $Utils.Optional<LampGroupByOutputType>[]
          }
          count: {
            args: Prisma.LampCountArgs<ExtArgs>
            result: $Utils.Optional<LampCountAggregateOutputType> | number
          }
        }
      }
      StreetLightingAccessory: {
        payload: Prisma.$StreetLightingAccessoryPayload<ExtArgs>
        fields: Prisma.StreetLightingAccessoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreetLightingAccessoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreetLightingAccessoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>
          }
          findFirst: {
            args: Prisma.StreetLightingAccessoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreetLightingAccessoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>
          }
          findMany: {
            args: Prisma.StreetLightingAccessoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>[]
          }
          create: {
            args: Prisma.StreetLightingAccessoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>
          }
          createMany: {
            args: Prisma.StreetLightingAccessoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreetLightingAccessoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>[]
          }
          delete: {
            args: Prisma.StreetLightingAccessoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>
          }
          update: {
            args: Prisma.StreetLightingAccessoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>
          }
          deleteMany: {
            args: Prisma.StreetLightingAccessoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreetLightingAccessoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreetLightingAccessoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>[]
          }
          upsert: {
            args: Prisma.StreetLightingAccessoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreetLightingAccessoryPayload>
          }
          aggregate: {
            args: Prisma.StreetLightingAccessoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreetLightingAccessory>
          }
          groupBy: {
            args: Prisma.StreetLightingAccessoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreetLightingAccessoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreetLightingAccessoryCountArgs<ExtArgs>
            result: $Utils.Optional<StreetLightingAccessoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    area?: AreaOmit
    roadFunction?: RoadFunctionOmit
    streetLighting?: StreetLightingOmit
    lamp?: LampOmit
    streetLightingAccessory?: StreetLightingAccessoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    streetLightings: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLightings?: boolean | AreaCountOutputTypeCountStreetLightingsArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountStreetLightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetLightingWhereInput
  }


  /**
   * Count Type RoadFunctionCountOutputType
   */

  export type RoadFunctionCountOutputType = {
    streetLightings: number
  }

  export type RoadFunctionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLightings?: boolean | RoadFunctionCountOutputTypeCountStreetLightingsArgs
  }

  // Custom InputTypes
  /**
   * RoadFunctionCountOutputType without action
   */
  export type RoadFunctionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunctionCountOutputType
     */
    select?: RoadFunctionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoadFunctionCountOutputType without action
   */
  export type RoadFunctionCountOutputTypeCountStreetLightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetLightingWhereInput
  }


  /**
   * Count Type StreetLightingCountOutputType
   */

  export type StreetLightingCountOutputType = {
    streetLightingAccessory: number
    lamp: number
  }

  export type StreetLightingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLightingAccessory?: boolean | StreetLightingCountOutputTypeCountStreetLightingAccessoryArgs
    lamp?: boolean | StreetLightingCountOutputTypeCountLampArgs
  }

  // Custom InputTypes
  /**
   * StreetLightingCountOutputType without action
   */
  export type StreetLightingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingCountOutputType
     */
    select?: StreetLightingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreetLightingCountOutputType without action
   */
  export type StreetLightingCountOutputTypeCountStreetLightingAccessoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetLightingAccessoryWhereInput
  }

  /**
   * StreetLightingCountOutputType without action
   */
  export type StreetLightingCountOutputTypeCountLampArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LampWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    phone: string | null
    phoneVerified: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    phone: string | null
    phoneVerified: Date | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    phone: number
    phoneVerified: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    phone?: true
    phoneVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    phone?: true
    phoneVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    phone?: true
    phoneVerified?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: Date | null
    image: string | null
    phone: string | null
    phoneVerified: Date | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    phone?: boolean
    phoneVerified?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "phone" | "phoneVerified" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: Date | null
      image: string | null
      phone: string | null
      phoneVerified: Date | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly phoneVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: string
    userId: string
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'String'>
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
    readonly updatedAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLightings?: boolean | Area$streetLightingsArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLightings?: boolean | Area$streetLightingsArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      streetLightings: Prisma.$StreetLightingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streetLightings<T extends Area$streetLightingsArgs<ExtArgs> = {}>(args?: Subset<T, Area$streetLightingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly createdAt: FieldRef<"Area", 'DateTime'>
    readonly updatedAt: FieldRef<"Area", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.streetLightings
   */
  export type Area$streetLightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    where?: StreetLightingWhereInput
    orderBy?: StreetLightingOrderByWithRelationInput | StreetLightingOrderByWithRelationInput[]
    cursor?: StreetLightingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreetLightingScalarFieldEnum | StreetLightingScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model RoadFunction
   */

  export type AggregateRoadFunction = {
    _count: RoadFunctionCountAggregateOutputType | null
    _min: RoadFunctionMinAggregateOutputType | null
    _max: RoadFunctionMaxAggregateOutputType | null
  }

  export type RoadFunctionMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadFunctionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoadFunctionCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoadFunctionMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadFunctionMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoadFunctionCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoadFunctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadFunction to aggregate.
     */
    where?: RoadFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadFunctions to fetch.
     */
    orderBy?: RoadFunctionOrderByWithRelationInput | RoadFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoadFunctions
    **/
    _count?: true | RoadFunctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadFunctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadFunctionMaxAggregateInputType
  }

  export type GetRoadFunctionAggregateType<T extends RoadFunctionAggregateArgs> = {
        [P in keyof T & keyof AggregateRoadFunction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoadFunction[P]>
      : GetScalarType<T[P], AggregateRoadFunction[P]>
  }




  export type RoadFunctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadFunctionWhereInput
    orderBy?: RoadFunctionOrderByWithAggregationInput | RoadFunctionOrderByWithAggregationInput[]
    by: RoadFunctionScalarFieldEnum[] | RoadFunctionScalarFieldEnum
    having?: RoadFunctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadFunctionCountAggregateInputType | true
    _min?: RoadFunctionMinAggregateInputType
    _max?: RoadFunctionMaxAggregateInputType
  }

  export type RoadFunctionGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: RoadFunctionCountAggregateOutputType | null
    _min: RoadFunctionMinAggregateOutputType | null
    _max: RoadFunctionMaxAggregateOutputType | null
  }

  type GetRoadFunctionGroupByPayload<T extends RoadFunctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadFunctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadFunctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadFunctionGroupByOutputType[P]>
            : GetScalarType<T[P], RoadFunctionGroupByOutputType[P]>
        }
      >
    >


  export type RoadFunctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLightings?: boolean | RoadFunction$streetLightingsArgs<ExtArgs>
    _count?: boolean | RoadFunctionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roadFunction"]>

  export type RoadFunctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["roadFunction"]>

  export type RoadFunctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["roadFunction"]>

  export type RoadFunctionSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoadFunctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["roadFunction"]>
  export type RoadFunctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLightings?: boolean | RoadFunction$streetLightingsArgs<ExtArgs>
    _count?: boolean | RoadFunctionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoadFunctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoadFunctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoadFunctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoadFunction"
    objects: {
      streetLightings: Prisma.$StreetLightingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roadFunction"]>
    composites: {}
  }

  type RoadFunctionGetPayload<S extends boolean | null | undefined | RoadFunctionDefaultArgs> = $Result.GetResult<Prisma.$RoadFunctionPayload, S>

  type RoadFunctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadFunctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadFunctionCountAggregateInputType | true
    }

  export interface RoadFunctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoadFunction'], meta: { name: 'RoadFunction' } }
    /**
     * Find zero or one RoadFunction that matches the filter.
     * @param {RoadFunctionFindUniqueArgs} args - Arguments to find a RoadFunction
     * @example
     * // Get one RoadFunction
     * const roadFunction = await prisma.roadFunction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadFunctionFindUniqueArgs>(args: SelectSubset<T, RoadFunctionFindUniqueArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoadFunction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadFunctionFindUniqueOrThrowArgs} args - Arguments to find a RoadFunction
     * @example
     * // Get one RoadFunction
     * const roadFunction = await prisma.roadFunction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadFunctionFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadFunctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadFunction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionFindFirstArgs} args - Arguments to find a RoadFunction
     * @example
     * // Get one RoadFunction
     * const roadFunction = await prisma.roadFunction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadFunctionFindFirstArgs>(args?: SelectSubset<T, RoadFunctionFindFirstArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoadFunction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionFindFirstOrThrowArgs} args - Arguments to find a RoadFunction
     * @example
     * // Get one RoadFunction
     * const roadFunction = await prisma.roadFunction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadFunctionFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadFunctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoadFunctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoadFunctions
     * const roadFunctions = await prisma.roadFunction.findMany()
     * 
     * // Get first 10 RoadFunctions
     * const roadFunctions = await prisma.roadFunction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadFunctionWithIdOnly = await prisma.roadFunction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoadFunctionFindManyArgs>(args?: SelectSubset<T, RoadFunctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoadFunction.
     * @param {RoadFunctionCreateArgs} args - Arguments to create a RoadFunction.
     * @example
     * // Create one RoadFunction
     * const RoadFunction = await prisma.roadFunction.create({
     *   data: {
     *     // ... data to create a RoadFunction
     *   }
     * })
     * 
     */
    create<T extends RoadFunctionCreateArgs>(args: SelectSubset<T, RoadFunctionCreateArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoadFunctions.
     * @param {RoadFunctionCreateManyArgs} args - Arguments to create many RoadFunctions.
     * @example
     * // Create many RoadFunctions
     * const roadFunction = await prisma.roadFunction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadFunctionCreateManyArgs>(args?: SelectSubset<T, RoadFunctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoadFunctions and returns the data saved in the database.
     * @param {RoadFunctionCreateManyAndReturnArgs} args - Arguments to create many RoadFunctions.
     * @example
     * // Create many RoadFunctions
     * const roadFunction = await prisma.roadFunction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoadFunctions and only return the `id`
     * const roadFunctionWithIdOnly = await prisma.roadFunction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoadFunctionCreateManyAndReturnArgs>(args?: SelectSubset<T, RoadFunctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoadFunction.
     * @param {RoadFunctionDeleteArgs} args - Arguments to delete one RoadFunction.
     * @example
     * // Delete one RoadFunction
     * const RoadFunction = await prisma.roadFunction.delete({
     *   where: {
     *     // ... filter to delete one RoadFunction
     *   }
     * })
     * 
     */
    delete<T extends RoadFunctionDeleteArgs>(args: SelectSubset<T, RoadFunctionDeleteArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoadFunction.
     * @param {RoadFunctionUpdateArgs} args - Arguments to update one RoadFunction.
     * @example
     * // Update one RoadFunction
     * const roadFunction = await prisma.roadFunction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadFunctionUpdateArgs>(args: SelectSubset<T, RoadFunctionUpdateArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoadFunctions.
     * @param {RoadFunctionDeleteManyArgs} args - Arguments to filter RoadFunctions to delete.
     * @example
     * // Delete a few RoadFunctions
     * const { count } = await prisma.roadFunction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadFunctionDeleteManyArgs>(args?: SelectSubset<T, RoadFunctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadFunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoadFunctions
     * const roadFunction = await prisma.roadFunction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadFunctionUpdateManyArgs>(args: SelectSubset<T, RoadFunctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoadFunctions and returns the data updated in the database.
     * @param {RoadFunctionUpdateManyAndReturnArgs} args - Arguments to update many RoadFunctions.
     * @example
     * // Update many RoadFunctions
     * const roadFunction = await prisma.roadFunction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoadFunctions and only return the `id`
     * const roadFunctionWithIdOnly = await prisma.roadFunction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoadFunctionUpdateManyAndReturnArgs>(args: SelectSubset<T, RoadFunctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoadFunction.
     * @param {RoadFunctionUpsertArgs} args - Arguments to update or create a RoadFunction.
     * @example
     * // Update or create a RoadFunction
     * const roadFunction = await prisma.roadFunction.upsert({
     *   create: {
     *     // ... data to create a RoadFunction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoadFunction we want to update
     *   }
     * })
     */
    upsert<T extends RoadFunctionUpsertArgs>(args: SelectSubset<T, RoadFunctionUpsertArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoadFunctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionCountArgs} args - Arguments to filter RoadFunctions to count.
     * @example
     * // Count the number of RoadFunctions
     * const count = await prisma.roadFunction.count({
     *   where: {
     *     // ... the filter for the RoadFunctions we want to count
     *   }
     * })
    **/
    count<T extends RoadFunctionCountArgs>(
      args?: Subset<T, RoadFunctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadFunctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoadFunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoadFunctionAggregateArgs>(args: Subset<T, RoadFunctionAggregateArgs>): Prisma.PrismaPromise<GetRoadFunctionAggregateType<T>>

    /**
     * Group by RoadFunction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFunctionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoadFunctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadFunctionGroupByArgs['orderBy'] }
        : { orderBy?: RoadFunctionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoadFunctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadFunctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoadFunction model
   */
  readonly fields: RoadFunctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoadFunction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadFunctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streetLightings<T extends RoadFunction$streetLightingsArgs<ExtArgs> = {}>(args?: Subset<T, RoadFunction$streetLightingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoadFunction model
   */
  interface RoadFunctionFieldRefs {
    readonly id: FieldRef<"RoadFunction", 'String'>
    readonly name: FieldRef<"RoadFunction", 'String'>
    readonly createdAt: FieldRef<"RoadFunction", 'DateTime'>
    readonly updatedAt: FieldRef<"RoadFunction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoadFunction findUnique
   */
  export type RoadFunctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * Filter, which RoadFunction to fetch.
     */
    where: RoadFunctionWhereUniqueInput
  }

  /**
   * RoadFunction findUniqueOrThrow
   */
  export type RoadFunctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * Filter, which RoadFunction to fetch.
     */
    where: RoadFunctionWhereUniqueInput
  }

  /**
   * RoadFunction findFirst
   */
  export type RoadFunctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * Filter, which RoadFunction to fetch.
     */
    where?: RoadFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadFunctions to fetch.
     */
    orderBy?: RoadFunctionOrderByWithRelationInput | RoadFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadFunctions.
     */
    cursor?: RoadFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadFunctions.
     */
    distinct?: RoadFunctionScalarFieldEnum | RoadFunctionScalarFieldEnum[]
  }

  /**
   * RoadFunction findFirstOrThrow
   */
  export type RoadFunctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * Filter, which RoadFunction to fetch.
     */
    where?: RoadFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadFunctions to fetch.
     */
    orderBy?: RoadFunctionOrderByWithRelationInput | RoadFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoadFunctions.
     */
    cursor?: RoadFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadFunctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoadFunctions.
     */
    distinct?: RoadFunctionScalarFieldEnum | RoadFunctionScalarFieldEnum[]
  }

  /**
   * RoadFunction findMany
   */
  export type RoadFunctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * Filter, which RoadFunctions to fetch.
     */
    where?: RoadFunctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoadFunctions to fetch.
     */
    orderBy?: RoadFunctionOrderByWithRelationInput | RoadFunctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoadFunctions.
     */
    cursor?: RoadFunctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoadFunctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoadFunctions.
     */
    skip?: number
    distinct?: RoadFunctionScalarFieldEnum | RoadFunctionScalarFieldEnum[]
  }

  /**
   * RoadFunction create
   */
  export type RoadFunctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * The data needed to create a RoadFunction.
     */
    data: XOR<RoadFunctionCreateInput, RoadFunctionUncheckedCreateInput>
  }

  /**
   * RoadFunction createMany
   */
  export type RoadFunctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoadFunctions.
     */
    data: RoadFunctionCreateManyInput | RoadFunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoadFunction createManyAndReturn
   */
  export type RoadFunctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * The data used to create many RoadFunctions.
     */
    data: RoadFunctionCreateManyInput | RoadFunctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoadFunction update
   */
  export type RoadFunctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * The data needed to update a RoadFunction.
     */
    data: XOR<RoadFunctionUpdateInput, RoadFunctionUncheckedUpdateInput>
    /**
     * Choose, which RoadFunction to update.
     */
    where: RoadFunctionWhereUniqueInput
  }

  /**
   * RoadFunction updateMany
   */
  export type RoadFunctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoadFunctions.
     */
    data: XOR<RoadFunctionUpdateManyMutationInput, RoadFunctionUncheckedUpdateManyInput>
    /**
     * Filter which RoadFunctions to update
     */
    where?: RoadFunctionWhereInput
    /**
     * Limit how many RoadFunctions to update.
     */
    limit?: number
  }

  /**
   * RoadFunction updateManyAndReturn
   */
  export type RoadFunctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * The data used to update RoadFunctions.
     */
    data: XOR<RoadFunctionUpdateManyMutationInput, RoadFunctionUncheckedUpdateManyInput>
    /**
     * Filter which RoadFunctions to update
     */
    where?: RoadFunctionWhereInput
    /**
     * Limit how many RoadFunctions to update.
     */
    limit?: number
  }

  /**
   * RoadFunction upsert
   */
  export type RoadFunctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * The filter to search for the RoadFunction to update in case it exists.
     */
    where: RoadFunctionWhereUniqueInput
    /**
     * In case the RoadFunction found by the `where` argument doesn't exist, create a new RoadFunction with this data.
     */
    create: XOR<RoadFunctionCreateInput, RoadFunctionUncheckedCreateInput>
    /**
     * In case the RoadFunction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadFunctionUpdateInput, RoadFunctionUncheckedUpdateInput>
  }

  /**
   * RoadFunction delete
   */
  export type RoadFunctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
    /**
     * Filter which RoadFunction to delete.
     */
    where: RoadFunctionWhereUniqueInput
  }

  /**
   * RoadFunction deleteMany
   */
  export type RoadFunctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoadFunctions to delete
     */
    where?: RoadFunctionWhereInput
    /**
     * Limit how many RoadFunctions to delete.
     */
    limit?: number
  }

  /**
   * RoadFunction.streetLightings
   */
  export type RoadFunction$streetLightingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    where?: StreetLightingWhereInput
    orderBy?: StreetLightingOrderByWithRelationInput | StreetLightingOrderByWithRelationInput[]
    cursor?: StreetLightingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreetLightingScalarFieldEnum | StreetLightingScalarFieldEnum[]
  }

  /**
   * RoadFunction without action
   */
  export type RoadFunctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadFunction
     */
    select?: RoadFunctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoadFunction
     */
    omit?: RoadFunctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadFunctionInclude<ExtArgs> | null
  }


  /**
   * Model StreetLighting
   */

  export type AggregateStreetLighting = {
    _count: StreetLightingCountAggregateOutputType | null
    _avg: StreetLightingAvgAggregateOutputType | null
    _sum: StreetLightingSumAggregateOutputType | null
    _min: StreetLightingMinAggregateOutputType | null
    _max: StreetLightingMaxAggregateOutputType | null
  }

  export type StreetLightingAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StreetLightingSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StreetLightingMinAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
    roadfunction_id: string | null
    area_id: string | null
    group: string | null
    poleType: string | null
    poleHeight: string | null
    poleMaterial: string | null
    status: $Enums.StreetLightingStatus | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreetLightingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
    roadfunction_id: string | null
    area_id: string | null
    group: string | null
    poleType: string | null
    poleHeight: string | null
    poleMaterial: string | null
    status: $Enums.StreetLightingStatus | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreetLightingCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    roadfunction_id: number
    area_id: number
    group: number
    poleType: number
    poleHeight: number
    poleMaterial: number
    status: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreetLightingAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type StreetLightingSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type StreetLightingMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    roadfunction_id?: true
    area_id?: true
    group?: true
    poleType?: true
    poleHeight?: true
    poleMaterial?: true
    status?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreetLightingMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    roadfunction_id?: true
    area_id?: true
    group?: true
    poleType?: true
    poleHeight?: true
    poleMaterial?: true
    status?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreetLightingCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    roadfunction_id?: true
    area_id?: true
    group?: true
    poleType?: true
    poleHeight?: true
    poleMaterial?: true
    status?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreetLightingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreetLighting to aggregate.
     */
    where?: StreetLightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightings to fetch.
     */
    orderBy?: StreetLightingOrderByWithRelationInput | StreetLightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreetLightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreetLightings
    **/
    _count?: true | StreetLightingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreetLightingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreetLightingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreetLightingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreetLightingMaxAggregateInputType
  }

  export type GetStreetLightingAggregateType<T extends StreetLightingAggregateArgs> = {
        [P in keyof T & keyof AggregateStreetLighting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreetLighting[P]>
      : GetScalarType<T[P], AggregateStreetLighting[P]>
  }




  export type StreetLightingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetLightingWhereInput
    orderBy?: StreetLightingOrderByWithAggregationInput | StreetLightingOrderByWithAggregationInput[]
    by: StreetLightingScalarFieldEnum[] | StreetLightingScalarFieldEnum
    having?: StreetLightingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreetLightingCountAggregateInputType | true
    _avg?: StreetLightingAvgAggregateInputType
    _sum?: StreetLightingSumAggregateInputType
    _min?: StreetLightingMinAggregateInputType
    _max?: StreetLightingMaxAggregateInputType
  }

  export type StreetLightingGroupByOutputType = {
    id: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    area_id: string
    group: string | null
    poleType: string | null
    poleHeight: string | null
    poleMaterial: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt: Date
    updatedAt: Date
    _count: StreetLightingCountAggregateOutputType | null
    _avg: StreetLightingAvgAggregateOutputType | null
    _sum: StreetLightingSumAggregateOutputType | null
    _min: StreetLightingMinAggregateOutputType | null
    _max: StreetLightingMaxAggregateOutputType | null
  }

  type GetStreetLightingGroupByPayload<T extends StreetLightingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreetLightingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreetLightingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreetLightingGroupByOutputType[P]>
            : GetScalarType<T[P], StreetLightingGroupByOutputType[P]>
        }
      >
    >


  export type StreetLightingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    roadfunction_id?: boolean
    area_id?: boolean
    group?: boolean
    poleType?: boolean
    poleHeight?: boolean
    poleMaterial?: boolean
    status?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLightingAccessory?: boolean | StreetLighting$streetLightingAccessoryArgs<ExtArgs>
    lamp?: boolean | StreetLighting$lampArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    roadFunction?: boolean | RoadFunctionDefaultArgs<ExtArgs>
    _count?: boolean | StreetLightingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetLighting"]>

  export type StreetLightingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    roadfunction_id?: boolean
    area_id?: boolean
    group?: boolean
    poleType?: boolean
    poleHeight?: boolean
    poleMaterial?: boolean
    status?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    roadFunction?: boolean | RoadFunctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetLighting"]>

  export type StreetLightingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    roadfunction_id?: boolean
    area_id?: boolean
    group?: boolean
    poleType?: boolean
    poleHeight?: boolean
    poleMaterial?: boolean
    status?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    roadFunction?: boolean | RoadFunctionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetLighting"]>

  export type StreetLightingSelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    roadfunction_id?: boolean
    area_id?: boolean
    group?: boolean
    poleType?: boolean
    poleHeight?: boolean
    poleMaterial?: boolean
    status?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreetLightingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude" | "roadfunction_id" | "area_id" | "group" | "poleType" | "poleHeight" | "poleMaterial" | "status" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["streetLighting"]>
  export type StreetLightingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLightingAccessory?: boolean | StreetLighting$streetLightingAccessoryArgs<ExtArgs>
    lamp?: boolean | StreetLighting$lampArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    roadFunction?: boolean | RoadFunctionDefaultArgs<ExtArgs>
    _count?: boolean | StreetLightingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreetLightingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    roadFunction?: boolean | RoadFunctionDefaultArgs<ExtArgs>
  }
  export type StreetLightingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    roadFunction?: boolean | RoadFunctionDefaultArgs<ExtArgs>
  }

  export type $StreetLightingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreetLighting"
    objects: {
      streetLightingAccessory: Prisma.$StreetLightingAccessoryPayload<ExtArgs>[]
      lamp: Prisma.$LampPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs>
      roadFunction: Prisma.$RoadFunctionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      latitude: number
      longitude: number
      roadfunction_id: string
      area_id: string
      group: string | null
      poleType: string | null
      poleHeight: string | null
      poleMaterial: string | null
      status: $Enums.StreetLightingStatus
      location: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streetLighting"]>
    composites: {}
  }

  type StreetLightingGetPayload<S extends boolean | null | undefined | StreetLightingDefaultArgs> = $Result.GetResult<Prisma.$StreetLightingPayload, S>

  type StreetLightingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreetLightingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreetLightingCountAggregateInputType | true
    }

  export interface StreetLightingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreetLighting'], meta: { name: 'StreetLighting' } }
    /**
     * Find zero or one StreetLighting that matches the filter.
     * @param {StreetLightingFindUniqueArgs} args - Arguments to find a StreetLighting
     * @example
     * // Get one StreetLighting
     * const streetLighting = await prisma.streetLighting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreetLightingFindUniqueArgs>(args: SelectSubset<T, StreetLightingFindUniqueArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreetLighting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreetLightingFindUniqueOrThrowArgs} args - Arguments to find a StreetLighting
     * @example
     * // Get one StreetLighting
     * const streetLighting = await prisma.streetLighting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreetLightingFindUniqueOrThrowArgs>(args: SelectSubset<T, StreetLightingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreetLighting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingFindFirstArgs} args - Arguments to find a StreetLighting
     * @example
     * // Get one StreetLighting
     * const streetLighting = await prisma.streetLighting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreetLightingFindFirstArgs>(args?: SelectSubset<T, StreetLightingFindFirstArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreetLighting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingFindFirstOrThrowArgs} args - Arguments to find a StreetLighting
     * @example
     * // Get one StreetLighting
     * const streetLighting = await prisma.streetLighting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreetLightingFindFirstOrThrowArgs>(args?: SelectSubset<T, StreetLightingFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreetLightings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreetLightings
     * const streetLightings = await prisma.streetLighting.findMany()
     * 
     * // Get first 10 StreetLightings
     * const streetLightings = await prisma.streetLighting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streetLightingWithIdOnly = await prisma.streetLighting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreetLightingFindManyArgs>(args?: SelectSubset<T, StreetLightingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreetLighting.
     * @param {StreetLightingCreateArgs} args - Arguments to create a StreetLighting.
     * @example
     * // Create one StreetLighting
     * const StreetLighting = await prisma.streetLighting.create({
     *   data: {
     *     // ... data to create a StreetLighting
     *   }
     * })
     * 
     */
    create<T extends StreetLightingCreateArgs>(args: SelectSubset<T, StreetLightingCreateArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreetLightings.
     * @param {StreetLightingCreateManyArgs} args - Arguments to create many StreetLightings.
     * @example
     * // Create many StreetLightings
     * const streetLighting = await prisma.streetLighting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreetLightingCreateManyArgs>(args?: SelectSubset<T, StreetLightingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreetLightings and returns the data saved in the database.
     * @param {StreetLightingCreateManyAndReturnArgs} args - Arguments to create many StreetLightings.
     * @example
     * // Create many StreetLightings
     * const streetLighting = await prisma.streetLighting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreetLightings and only return the `id`
     * const streetLightingWithIdOnly = await prisma.streetLighting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreetLightingCreateManyAndReturnArgs>(args?: SelectSubset<T, StreetLightingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreetLighting.
     * @param {StreetLightingDeleteArgs} args - Arguments to delete one StreetLighting.
     * @example
     * // Delete one StreetLighting
     * const StreetLighting = await prisma.streetLighting.delete({
     *   where: {
     *     // ... filter to delete one StreetLighting
     *   }
     * })
     * 
     */
    delete<T extends StreetLightingDeleteArgs>(args: SelectSubset<T, StreetLightingDeleteArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreetLighting.
     * @param {StreetLightingUpdateArgs} args - Arguments to update one StreetLighting.
     * @example
     * // Update one StreetLighting
     * const streetLighting = await prisma.streetLighting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreetLightingUpdateArgs>(args: SelectSubset<T, StreetLightingUpdateArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreetLightings.
     * @param {StreetLightingDeleteManyArgs} args - Arguments to filter StreetLightings to delete.
     * @example
     * // Delete a few StreetLightings
     * const { count } = await prisma.streetLighting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreetLightingDeleteManyArgs>(args?: SelectSubset<T, StreetLightingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreetLightings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreetLightings
     * const streetLighting = await prisma.streetLighting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreetLightingUpdateManyArgs>(args: SelectSubset<T, StreetLightingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreetLightings and returns the data updated in the database.
     * @param {StreetLightingUpdateManyAndReturnArgs} args - Arguments to update many StreetLightings.
     * @example
     * // Update many StreetLightings
     * const streetLighting = await prisma.streetLighting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreetLightings and only return the `id`
     * const streetLightingWithIdOnly = await prisma.streetLighting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreetLightingUpdateManyAndReturnArgs>(args: SelectSubset<T, StreetLightingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreetLighting.
     * @param {StreetLightingUpsertArgs} args - Arguments to update or create a StreetLighting.
     * @example
     * // Update or create a StreetLighting
     * const streetLighting = await prisma.streetLighting.upsert({
     *   create: {
     *     // ... data to create a StreetLighting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreetLighting we want to update
     *   }
     * })
     */
    upsert<T extends StreetLightingUpsertArgs>(args: SelectSubset<T, StreetLightingUpsertArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreetLightings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingCountArgs} args - Arguments to filter StreetLightings to count.
     * @example
     * // Count the number of StreetLightings
     * const count = await prisma.streetLighting.count({
     *   where: {
     *     // ... the filter for the StreetLightings we want to count
     *   }
     * })
    **/
    count<T extends StreetLightingCountArgs>(
      args?: Subset<T, StreetLightingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreetLightingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreetLighting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreetLightingAggregateArgs>(args: Subset<T, StreetLightingAggregateArgs>): Prisma.PrismaPromise<GetStreetLightingAggregateType<T>>

    /**
     * Group by StreetLighting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreetLightingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreetLightingGroupByArgs['orderBy'] }
        : { orderBy?: StreetLightingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreetLightingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreetLightingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreetLighting model
   */
  readonly fields: StreetLightingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreetLighting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreetLightingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streetLightingAccessory<T extends StreetLighting$streetLightingAccessoryArgs<ExtArgs> = {}>(args?: Subset<T, StreetLighting$streetLightingAccessoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lamp<T extends StreetLighting$lampArgs<ExtArgs> = {}>(args?: Subset<T, StreetLighting$lampArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roadFunction<T extends RoadFunctionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadFunctionDefaultArgs<ExtArgs>>): Prisma__RoadFunctionClient<$Result.GetResult<Prisma.$RoadFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreetLighting model
   */
  interface StreetLightingFieldRefs {
    readonly id: FieldRef<"StreetLighting", 'Int'>
    readonly name: FieldRef<"StreetLighting", 'String'>
    readonly latitude: FieldRef<"StreetLighting", 'Float'>
    readonly longitude: FieldRef<"StreetLighting", 'Float'>
    readonly roadfunction_id: FieldRef<"StreetLighting", 'String'>
    readonly area_id: FieldRef<"StreetLighting", 'String'>
    readonly group: FieldRef<"StreetLighting", 'String'>
    readonly poleType: FieldRef<"StreetLighting", 'String'>
    readonly poleHeight: FieldRef<"StreetLighting", 'String'>
    readonly poleMaterial: FieldRef<"StreetLighting", 'String'>
    readonly status: FieldRef<"StreetLighting", 'StreetLightingStatus'>
    readonly location: FieldRef<"StreetLighting", 'String'>
    readonly createdAt: FieldRef<"StreetLighting", 'DateTime'>
    readonly updatedAt: FieldRef<"StreetLighting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreetLighting findUnique
   */
  export type StreetLightingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * Filter, which StreetLighting to fetch.
     */
    where: StreetLightingWhereUniqueInput
  }

  /**
   * StreetLighting findUniqueOrThrow
   */
  export type StreetLightingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * Filter, which StreetLighting to fetch.
     */
    where: StreetLightingWhereUniqueInput
  }

  /**
   * StreetLighting findFirst
   */
  export type StreetLightingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * Filter, which StreetLighting to fetch.
     */
    where?: StreetLightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightings to fetch.
     */
    orderBy?: StreetLightingOrderByWithRelationInput | StreetLightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreetLightings.
     */
    cursor?: StreetLightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreetLightings.
     */
    distinct?: StreetLightingScalarFieldEnum | StreetLightingScalarFieldEnum[]
  }

  /**
   * StreetLighting findFirstOrThrow
   */
  export type StreetLightingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * Filter, which StreetLighting to fetch.
     */
    where?: StreetLightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightings to fetch.
     */
    orderBy?: StreetLightingOrderByWithRelationInput | StreetLightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreetLightings.
     */
    cursor?: StreetLightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreetLightings.
     */
    distinct?: StreetLightingScalarFieldEnum | StreetLightingScalarFieldEnum[]
  }

  /**
   * StreetLighting findMany
   */
  export type StreetLightingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * Filter, which StreetLightings to fetch.
     */
    where?: StreetLightingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightings to fetch.
     */
    orderBy?: StreetLightingOrderByWithRelationInput | StreetLightingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreetLightings.
     */
    cursor?: StreetLightingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightings.
     */
    skip?: number
    distinct?: StreetLightingScalarFieldEnum | StreetLightingScalarFieldEnum[]
  }

  /**
   * StreetLighting create
   */
  export type StreetLightingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * The data needed to create a StreetLighting.
     */
    data: XOR<StreetLightingCreateInput, StreetLightingUncheckedCreateInput>
  }

  /**
   * StreetLighting createMany
   */
  export type StreetLightingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreetLightings.
     */
    data: StreetLightingCreateManyInput | StreetLightingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreetLighting createManyAndReturn
   */
  export type StreetLightingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * The data used to create many StreetLightings.
     */
    data: StreetLightingCreateManyInput | StreetLightingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreetLighting update
   */
  export type StreetLightingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * The data needed to update a StreetLighting.
     */
    data: XOR<StreetLightingUpdateInput, StreetLightingUncheckedUpdateInput>
    /**
     * Choose, which StreetLighting to update.
     */
    where: StreetLightingWhereUniqueInput
  }

  /**
   * StreetLighting updateMany
   */
  export type StreetLightingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreetLightings.
     */
    data: XOR<StreetLightingUpdateManyMutationInput, StreetLightingUncheckedUpdateManyInput>
    /**
     * Filter which StreetLightings to update
     */
    where?: StreetLightingWhereInput
    /**
     * Limit how many StreetLightings to update.
     */
    limit?: number
  }

  /**
   * StreetLighting updateManyAndReturn
   */
  export type StreetLightingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * The data used to update StreetLightings.
     */
    data: XOR<StreetLightingUpdateManyMutationInput, StreetLightingUncheckedUpdateManyInput>
    /**
     * Filter which StreetLightings to update
     */
    where?: StreetLightingWhereInput
    /**
     * Limit how many StreetLightings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreetLighting upsert
   */
  export type StreetLightingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * The filter to search for the StreetLighting to update in case it exists.
     */
    where: StreetLightingWhereUniqueInput
    /**
     * In case the StreetLighting found by the `where` argument doesn't exist, create a new StreetLighting with this data.
     */
    create: XOR<StreetLightingCreateInput, StreetLightingUncheckedCreateInput>
    /**
     * In case the StreetLighting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreetLightingUpdateInput, StreetLightingUncheckedUpdateInput>
  }

  /**
   * StreetLighting delete
   */
  export type StreetLightingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
    /**
     * Filter which StreetLighting to delete.
     */
    where: StreetLightingWhereUniqueInput
  }

  /**
   * StreetLighting deleteMany
   */
  export type StreetLightingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreetLightings to delete
     */
    where?: StreetLightingWhereInput
    /**
     * Limit how many StreetLightings to delete.
     */
    limit?: number
  }

  /**
   * StreetLighting.streetLightingAccessory
   */
  export type StreetLighting$streetLightingAccessoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    where?: StreetLightingAccessoryWhereInput
    orderBy?: StreetLightingAccessoryOrderByWithRelationInput | StreetLightingAccessoryOrderByWithRelationInput[]
    cursor?: StreetLightingAccessoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreetLightingAccessoryScalarFieldEnum | StreetLightingAccessoryScalarFieldEnum[]
  }

  /**
   * StreetLighting.lamp
   */
  export type StreetLighting$lampArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    where?: LampWhereInput
    orderBy?: LampOrderByWithRelationInput | LampOrderByWithRelationInput[]
    cursor?: LampWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LampScalarFieldEnum | LampScalarFieldEnum[]
  }

  /**
   * StreetLighting without action
   */
  export type StreetLightingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLighting
     */
    select?: StreetLightingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLighting
     */
    omit?: StreetLightingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingInclude<ExtArgs> | null
  }


  /**
   * Model Lamp
   */

  export type AggregateLamp = {
    _count: LampCountAggregateOutputType | null
    _avg: LampAvgAggregateOutputType | null
    _sum: LampSumAggregateOutputType | null
    _min: LampMinAggregateOutputType | null
    _max: LampMaxAggregateOutputType | null
  }

  export type LampAvgAggregateOutputType = {
    id: number | null
    streetlighting_id: number | null
  }

  export type LampSumAggregateOutputType = {
    id: number | null
    streetlighting_id: number | null
  }

  export type LampMinAggregateOutputType = {
    id: number | null
    streetlighting_id: number | null
    brand: string | null
    type: string | null
    power: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LampMaxAggregateOutputType = {
    id: number | null
    streetlighting_id: number | null
    brand: string | null
    type: string | null
    power: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LampCountAggregateOutputType = {
    id: number
    streetlighting_id: number
    brand: number
    type: number
    power: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LampAvgAggregateInputType = {
    id?: true
    streetlighting_id?: true
  }

  export type LampSumAggregateInputType = {
    id?: true
    streetlighting_id?: true
  }

  export type LampMinAggregateInputType = {
    id?: true
    streetlighting_id?: true
    brand?: true
    type?: true
    power?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LampMaxAggregateInputType = {
    id?: true
    streetlighting_id?: true
    brand?: true
    type?: true
    power?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LampCountAggregateInputType = {
    id?: true
    streetlighting_id?: true
    brand?: true
    type?: true
    power?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LampAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lamp to aggregate.
     */
    where?: LampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamps to fetch.
     */
    orderBy?: LampOrderByWithRelationInput | LampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lamps
    **/
    _count?: true | LampCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LampAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LampSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LampMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LampMaxAggregateInputType
  }

  export type GetLampAggregateType<T extends LampAggregateArgs> = {
        [P in keyof T & keyof AggregateLamp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLamp[P]>
      : GetScalarType<T[P], AggregateLamp[P]>
  }




  export type LampGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LampWhereInput
    orderBy?: LampOrderByWithAggregationInput | LampOrderByWithAggregationInput[]
    by: LampScalarFieldEnum[] | LampScalarFieldEnum
    having?: LampScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LampCountAggregateInputType | true
    _avg?: LampAvgAggregateInputType
    _sum?: LampSumAggregateInputType
    _min?: LampMinAggregateInputType
    _max?: LampMaxAggregateInputType
  }

  export type LampGroupByOutputType = {
    id: number
    streetlighting_id: number
    brand: string
    type: string
    power: string
    createdAt: Date
    updatedAt: Date
    _count: LampCountAggregateOutputType | null
    _avg: LampAvgAggregateOutputType | null
    _sum: LampSumAggregateOutputType | null
    _min: LampMinAggregateOutputType | null
    _max: LampMaxAggregateOutputType | null
  }

  type GetLampGroupByPayload<T extends LampGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LampGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LampGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LampGroupByOutputType[P]>
            : GetScalarType<T[P], LampGroupByOutputType[P]>
        }
      >
    >


  export type LampSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetlighting_id?: boolean
    brand?: boolean
    type?: boolean
    power?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lamp"]>

  export type LampSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetlighting_id?: boolean
    brand?: boolean
    type?: boolean
    power?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lamp"]>

  export type LampSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    streetlighting_id?: boolean
    brand?: boolean
    type?: boolean
    power?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lamp"]>

  export type LampSelectScalar = {
    id?: boolean
    streetlighting_id?: boolean
    brand?: boolean
    type?: boolean
    power?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LampOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "streetlighting_id" | "brand" | "type" | "power" | "createdAt" | "updatedAt", ExtArgs["result"]["lamp"]>
  export type LampInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }
  export type LampIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }
  export type LampIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }

  export type $LampPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lamp"
    objects: {
      streetLighting: Prisma.$StreetLightingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      streetlighting_id: number
      brand: string
      type: string
      power: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lamp"]>
    composites: {}
  }

  type LampGetPayload<S extends boolean | null | undefined | LampDefaultArgs> = $Result.GetResult<Prisma.$LampPayload, S>

  type LampCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LampFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LampCountAggregateInputType | true
    }

  export interface LampDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lamp'], meta: { name: 'Lamp' } }
    /**
     * Find zero or one Lamp that matches the filter.
     * @param {LampFindUniqueArgs} args - Arguments to find a Lamp
     * @example
     * // Get one Lamp
     * const lamp = await prisma.lamp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LampFindUniqueArgs>(args: SelectSubset<T, LampFindUniqueArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lamp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LampFindUniqueOrThrowArgs} args - Arguments to find a Lamp
     * @example
     * // Get one Lamp
     * const lamp = await prisma.lamp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LampFindUniqueOrThrowArgs>(args: SelectSubset<T, LampFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lamp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampFindFirstArgs} args - Arguments to find a Lamp
     * @example
     * // Get one Lamp
     * const lamp = await prisma.lamp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LampFindFirstArgs>(args?: SelectSubset<T, LampFindFirstArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lamp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampFindFirstOrThrowArgs} args - Arguments to find a Lamp
     * @example
     * // Get one Lamp
     * const lamp = await prisma.lamp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LampFindFirstOrThrowArgs>(args?: SelectSubset<T, LampFindFirstOrThrowArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lamps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lamps
     * const lamps = await prisma.lamp.findMany()
     * 
     * // Get first 10 Lamps
     * const lamps = await prisma.lamp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lampWithIdOnly = await prisma.lamp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LampFindManyArgs>(args?: SelectSubset<T, LampFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lamp.
     * @param {LampCreateArgs} args - Arguments to create a Lamp.
     * @example
     * // Create one Lamp
     * const Lamp = await prisma.lamp.create({
     *   data: {
     *     // ... data to create a Lamp
     *   }
     * })
     * 
     */
    create<T extends LampCreateArgs>(args: SelectSubset<T, LampCreateArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lamps.
     * @param {LampCreateManyArgs} args - Arguments to create many Lamps.
     * @example
     * // Create many Lamps
     * const lamp = await prisma.lamp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LampCreateManyArgs>(args?: SelectSubset<T, LampCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lamps and returns the data saved in the database.
     * @param {LampCreateManyAndReturnArgs} args - Arguments to create many Lamps.
     * @example
     * // Create many Lamps
     * const lamp = await prisma.lamp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lamps and only return the `id`
     * const lampWithIdOnly = await prisma.lamp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LampCreateManyAndReturnArgs>(args?: SelectSubset<T, LampCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lamp.
     * @param {LampDeleteArgs} args - Arguments to delete one Lamp.
     * @example
     * // Delete one Lamp
     * const Lamp = await prisma.lamp.delete({
     *   where: {
     *     // ... filter to delete one Lamp
     *   }
     * })
     * 
     */
    delete<T extends LampDeleteArgs>(args: SelectSubset<T, LampDeleteArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lamp.
     * @param {LampUpdateArgs} args - Arguments to update one Lamp.
     * @example
     * // Update one Lamp
     * const lamp = await prisma.lamp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LampUpdateArgs>(args: SelectSubset<T, LampUpdateArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lamps.
     * @param {LampDeleteManyArgs} args - Arguments to filter Lamps to delete.
     * @example
     * // Delete a few Lamps
     * const { count } = await prisma.lamp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LampDeleteManyArgs>(args?: SelectSubset<T, LampDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lamps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lamps
     * const lamp = await prisma.lamp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LampUpdateManyArgs>(args: SelectSubset<T, LampUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lamps and returns the data updated in the database.
     * @param {LampUpdateManyAndReturnArgs} args - Arguments to update many Lamps.
     * @example
     * // Update many Lamps
     * const lamp = await prisma.lamp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lamps and only return the `id`
     * const lampWithIdOnly = await prisma.lamp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LampUpdateManyAndReturnArgs>(args: SelectSubset<T, LampUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lamp.
     * @param {LampUpsertArgs} args - Arguments to update or create a Lamp.
     * @example
     * // Update or create a Lamp
     * const lamp = await prisma.lamp.upsert({
     *   create: {
     *     // ... data to create a Lamp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lamp we want to update
     *   }
     * })
     */
    upsert<T extends LampUpsertArgs>(args: SelectSubset<T, LampUpsertArgs<ExtArgs>>): Prisma__LampClient<$Result.GetResult<Prisma.$LampPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lamps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampCountArgs} args - Arguments to filter Lamps to count.
     * @example
     * // Count the number of Lamps
     * const count = await prisma.lamp.count({
     *   where: {
     *     // ... the filter for the Lamps we want to count
     *   }
     * })
    **/
    count<T extends LampCountArgs>(
      args?: Subset<T, LampCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LampCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lamp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LampAggregateArgs>(args: Subset<T, LampAggregateArgs>): Prisma.PrismaPromise<GetLampAggregateType<T>>

    /**
     * Group by Lamp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LampGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LampGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LampGroupByArgs['orderBy'] }
        : { orderBy?: LampGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LampGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLampGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lamp model
   */
  readonly fields: LampFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lamp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LampClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streetLighting<T extends StreetLightingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreetLightingDefaultArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lamp model
   */
  interface LampFieldRefs {
    readonly id: FieldRef<"Lamp", 'Int'>
    readonly streetlighting_id: FieldRef<"Lamp", 'Int'>
    readonly brand: FieldRef<"Lamp", 'String'>
    readonly type: FieldRef<"Lamp", 'String'>
    readonly power: FieldRef<"Lamp", 'String'>
    readonly createdAt: FieldRef<"Lamp", 'DateTime'>
    readonly updatedAt: FieldRef<"Lamp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lamp findUnique
   */
  export type LampFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * Filter, which Lamp to fetch.
     */
    where: LampWhereUniqueInput
  }

  /**
   * Lamp findUniqueOrThrow
   */
  export type LampFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * Filter, which Lamp to fetch.
     */
    where: LampWhereUniqueInput
  }

  /**
   * Lamp findFirst
   */
  export type LampFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * Filter, which Lamp to fetch.
     */
    where?: LampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamps to fetch.
     */
    orderBy?: LampOrderByWithRelationInput | LampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lamps.
     */
    cursor?: LampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lamps.
     */
    distinct?: LampScalarFieldEnum | LampScalarFieldEnum[]
  }

  /**
   * Lamp findFirstOrThrow
   */
  export type LampFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * Filter, which Lamp to fetch.
     */
    where?: LampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamps to fetch.
     */
    orderBy?: LampOrderByWithRelationInput | LampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lamps.
     */
    cursor?: LampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lamps.
     */
    distinct?: LampScalarFieldEnum | LampScalarFieldEnum[]
  }

  /**
   * Lamp findMany
   */
  export type LampFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * Filter, which Lamps to fetch.
     */
    where?: LampWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lamps to fetch.
     */
    orderBy?: LampOrderByWithRelationInput | LampOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lamps.
     */
    cursor?: LampWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lamps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lamps.
     */
    skip?: number
    distinct?: LampScalarFieldEnum | LampScalarFieldEnum[]
  }

  /**
   * Lamp create
   */
  export type LampCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * The data needed to create a Lamp.
     */
    data: XOR<LampCreateInput, LampUncheckedCreateInput>
  }

  /**
   * Lamp createMany
   */
  export type LampCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lamps.
     */
    data: LampCreateManyInput | LampCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lamp createManyAndReturn
   */
  export type LampCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * The data used to create many Lamps.
     */
    data: LampCreateManyInput | LampCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lamp update
   */
  export type LampUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * The data needed to update a Lamp.
     */
    data: XOR<LampUpdateInput, LampUncheckedUpdateInput>
    /**
     * Choose, which Lamp to update.
     */
    where: LampWhereUniqueInput
  }

  /**
   * Lamp updateMany
   */
  export type LampUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lamps.
     */
    data: XOR<LampUpdateManyMutationInput, LampUncheckedUpdateManyInput>
    /**
     * Filter which Lamps to update
     */
    where?: LampWhereInput
    /**
     * Limit how many Lamps to update.
     */
    limit?: number
  }

  /**
   * Lamp updateManyAndReturn
   */
  export type LampUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * The data used to update Lamps.
     */
    data: XOR<LampUpdateManyMutationInput, LampUncheckedUpdateManyInput>
    /**
     * Filter which Lamps to update
     */
    where?: LampWhereInput
    /**
     * Limit how many Lamps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lamp upsert
   */
  export type LampUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * The filter to search for the Lamp to update in case it exists.
     */
    where: LampWhereUniqueInput
    /**
     * In case the Lamp found by the `where` argument doesn't exist, create a new Lamp with this data.
     */
    create: XOR<LampCreateInput, LampUncheckedCreateInput>
    /**
     * In case the Lamp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LampUpdateInput, LampUncheckedUpdateInput>
  }

  /**
   * Lamp delete
   */
  export type LampDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
    /**
     * Filter which Lamp to delete.
     */
    where: LampWhereUniqueInput
  }

  /**
   * Lamp deleteMany
   */
  export type LampDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lamps to delete
     */
    where?: LampWhereInput
    /**
     * Limit how many Lamps to delete.
     */
    limit?: number
  }

  /**
   * Lamp without action
   */
  export type LampDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lamp
     */
    select?: LampSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lamp
     */
    omit?: LampOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LampInclude<ExtArgs> | null
  }


  /**
   * Model StreetLightingAccessory
   */

  export type AggregateStreetLightingAccessory = {
    _count: StreetLightingAccessoryCountAggregateOutputType | null
    _avg: StreetLightingAccessoryAvgAggregateOutputType | null
    _sum: StreetLightingAccessorySumAggregateOutputType | null
    _min: StreetLightingAccessoryMinAggregateOutputType | null
    _max: StreetLightingAccessoryMaxAggregateOutputType | null
  }

  export type StreetLightingAccessoryAvgAggregateOutputType = {
    id: number | null
    streetlighting_id: number | null
  }

  export type StreetLightingAccessorySumAggregateOutputType = {
    id: number | null
    streetlighting_id: number | null
  }

  export type StreetLightingAccessoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    streetlighting_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreetLightingAccessoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    streetlighting_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StreetLightingAccessoryCountAggregateOutputType = {
    id: number
    name: number
    streetlighting_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StreetLightingAccessoryAvgAggregateInputType = {
    id?: true
    streetlighting_id?: true
  }

  export type StreetLightingAccessorySumAggregateInputType = {
    id?: true
    streetlighting_id?: true
  }

  export type StreetLightingAccessoryMinAggregateInputType = {
    id?: true
    name?: true
    streetlighting_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreetLightingAccessoryMaxAggregateInputType = {
    id?: true
    name?: true
    streetlighting_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StreetLightingAccessoryCountAggregateInputType = {
    id?: true
    name?: true
    streetlighting_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StreetLightingAccessoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreetLightingAccessory to aggregate.
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightingAccessories to fetch.
     */
    orderBy?: StreetLightingAccessoryOrderByWithRelationInput | StreetLightingAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreetLightingAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightingAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightingAccessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreetLightingAccessories
    **/
    _count?: true | StreetLightingAccessoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreetLightingAccessoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreetLightingAccessorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreetLightingAccessoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreetLightingAccessoryMaxAggregateInputType
  }

  export type GetStreetLightingAccessoryAggregateType<T extends StreetLightingAccessoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStreetLightingAccessory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreetLightingAccessory[P]>
      : GetScalarType<T[P], AggregateStreetLightingAccessory[P]>
  }




  export type StreetLightingAccessoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreetLightingAccessoryWhereInput
    orderBy?: StreetLightingAccessoryOrderByWithAggregationInput | StreetLightingAccessoryOrderByWithAggregationInput[]
    by: StreetLightingAccessoryScalarFieldEnum[] | StreetLightingAccessoryScalarFieldEnum
    having?: StreetLightingAccessoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreetLightingAccessoryCountAggregateInputType | true
    _avg?: StreetLightingAccessoryAvgAggregateInputType
    _sum?: StreetLightingAccessorySumAggregateInputType
    _min?: StreetLightingAccessoryMinAggregateInputType
    _max?: StreetLightingAccessoryMaxAggregateInputType
  }

  export type StreetLightingAccessoryGroupByOutputType = {
    id: number
    name: string
    streetlighting_id: number
    createdAt: Date
    updatedAt: Date
    _count: StreetLightingAccessoryCountAggregateOutputType | null
    _avg: StreetLightingAccessoryAvgAggregateOutputType | null
    _sum: StreetLightingAccessorySumAggregateOutputType | null
    _min: StreetLightingAccessoryMinAggregateOutputType | null
    _max: StreetLightingAccessoryMaxAggregateOutputType | null
  }

  type GetStreetLightingAccessoryGroupByPayload<T extends StreetLightingAccessoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreetLightingAccessoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreetLightingAccessoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreetLightingAccessoryGroupByOutputType[P]>
            : GetScalarType<T[P], StreetLightingAccessoryGroupByOutputType[P]>
        }
      >
    >


  export type StreetLightingAccessorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streetlighting_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetLightingAccessory"]>

  export type StreetLightingAccessorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streetlighting_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetLightingAccessory"]>

  export type StreetLightingAccessorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streetlighting_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streetLightingAccessory"]>

  export type StreetLightingAccessorySelectScalar = {
    id?: boolean
    name?: boolean
    streetlighting_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StreetLightingAccessoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "streetlighting_id" | "createdAt" | "updatedAt", ExtArgs["result"]["streetLightingAccessory"]>
  export type StreetLightingAccessoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }
  export type StreetLightingAccessoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }
  export type StreetLightingAccessoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streetLighting?: boolean | StreetLightingDefaultArgs<ExtArgs>
  }

  export type $StreetLightingAccessoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreetLightingAccessory"
    objects: {
      streetLighting: Prisma.$StreetLightingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      streetlighting_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["streetLightingAccessory"]>
    composites: {}
  }

  type StreetLightingAccessoryGetPayload<S extends boolean | null | undefined | StreetLightingAccessoryDefaultArgs> = $Result.GetResult<Prisma.$StreetLightingAccessoryPayload, S>

  type StreetLightingAccessoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreetLightingAccessoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreetLightingAccessoryCountAggregateInputType | true
    }

  export interface StreetLightingAccessoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreetLightingAccessory'], meta: { name: 'StreetLightingAccessory' } }
    /**
     * Find zero or one StreetLightingAccessory that matches the filter.
     * @param {StreetLightingAccessoryFindUniqueArgs} args - Arguments to find a StreetLightingAccessory
     * @example
     * // Get one StreetLightingAccessory
     * const streetLightingAccessory = await prisma.streetLightingAccessory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreetLightingAccessoryFindUniqueArgs>(args: SelectSubset<T, StreetLightingAccessoryFindUniqueArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreetLightingAccessory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreetLightingAccessoryFindUniqueOrThrowArgs} args - Arguments to find a StreetLightingAccessory
     * @example
     * // Get one StreetLightingAccessory
     * const streetLightingAccessory = await prisma.streetLightingAccessory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreetLightingAccessoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StreetLightingAccessoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreetLightingAccessory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryFindFirstArgs} args - Arguments to find a StreetLightingAccessory
     * @example
     * // Get one StreetLightingAccessory
     * const streetLightingAccessory = await prisma.streetLightingAccessory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreetLightingAccessoryFindFirstArgs>(args?: SelectSubset<T, StreetLightingAccessoryFindFirstArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreetLightingAccessory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryFindFirstOrThrowArgs} args - Arguments to find a StreetLightingAccessory
     * @example
     * // Get one StreetLightingAccessory
     * const streetLightingAccessory = await prisma.streetLightingAccessory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreetLightingAccessoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StreetLightingAccessoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreetLightingAccessories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreetLightingAccessories
     * const streetLightingAccessories = await prisma.streetLightingAccessory.findMany()
     * 
     * // Get first 10 StreetLightingAccessories
     * const streetLightingAccessories = await prisma.streetLightingAccessory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streetLightingAccessoryWithIdOnly = await prisma.streetLightingAccessory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreetLightingAccessoryFindManyArgs>(args?: SelectSubset<T, StreetLightingAccessoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreetLightingAccessory.
     * @param {StreetLightingAccessoryCreateArgs} args - Arguments to create a StreetLightingAccessory.
     * @example
     * // Create one StreetLightingAccessory
     * const StreetLightingAccessory = await prisma.streetLightingAccessory.create({
     *   data: {
     *     // ... data to create a StreetLightingAccessory
     *   }
     * })
     * 
     */
    create<T extends StreetLightingAccessoryCreateArgs>(args: SelectSubset<T, StreetLightingAccessoryCreateArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreetLightingAccessories.
     * @param {StreetLightingAccessoryCreateManyArgs} args - Arguments to create many StreetLightingAccessories.
     * @example
     * // Create many StreetLightingAccessories
     * const streetLightingAccessory = await prisma.streetLightingAccessory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreetLightingAccessoryCreateManyArgs>(args?: SelectSubset<T, StreetLightingAccessoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreetLightingAccessories and returns the data saved in the database.
     * @param {StreetLightingAccessoryCreateManyAndReturnArgs} args - Arguments to create many StreetLightingAccessories.
     * @example
     * // Create many StreetLightingAccessories
     * const streetLightingAccessory = await prisma.streetLightingAccessory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreetLightingAccessories and only return the `id`
     * const streetLightingAccessoryWithIdOnly = await prisma.streetLightingAccessory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreetLightingAccessoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StreetLightingAccessoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreetLightingAccessory.
     * @param {StreetLightingAccessoryDeleteArgs} args - Arguments to delete one StreetLightingAccessory.
     * @example
     * // Delete one StreetLightingAccessory
     * const StreetLightingAccessory = await prisma.streetLightingAccessory.delete({
     *   where: {
     *     // ... filter to delete one StreetLightingAccessory
     *   }
     * })
     * 
     */
    delete<T extends StreetLightingAccessoryDeleteArgs>(args: SelectSubset<T, StreetLightingAccessoryDeleteArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreetLightingAccessory.
     * @param {StreetLightingAccessoryUpdateArgs} args - Arguments to update one StreetLightingAccessory.
     * @example
     * // Update one StreetLightingAccessory
     * const streetLightingAccessory = await prisma.streetLightingAccessory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreetLightingAccessoryUpdateArgs>(args: SelectSubset<T, StreetLightingAccessoryUpdateArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreetLightingAccessories.
     * @param {StreetLightingAccessoryDeleteManyArgs} args - Arguments to filter StreetLightingAccessories to delete.
     * @example
     * // Delete a few StreetLightingAccessories
     * const { count } = await prisma.streetLightingAccessory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreetLightingAccessoryDeleteManyArgs>(args?: SelectSubset<T, StreetLightingAccessoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreetLightingAccessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreetLightingAccessories
     * const streetLightingAccessory = await prisma.streetLightingAccessory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreetLightingAccessoryUpdateManyArgs>(args: SelectSubset<T, StreetLightingAccessoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreetLightingAccessories and returns the data updated in the database.
     * @param {StreetLightingAccessoryUpdateManyAndReturnArgs} args - Arguments to update many StreetLightingAccessories.
     * @example
     * // Update many StreetLightingAccessories
     * const streetLightingAccessory = await prisma.streetLightingAccessory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreetLightingAccessories and only return the `id`
     * const streetLightingAccessoryWithIdOnly = await prisma.streetLightingAccessory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreetLightingAccessoryUpdateManyAndReturnArgs>(args: SelectSubset<T, StreetLightingAccessoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreetLightingAccessory.
     * @param {StreetLightingAccessoryUpsertArgs} args - Arguments to update or create a StreetLightingAccessory.
     * @example
     * // Update or create a StreetLightingAccessory
     * const streetLightingAccessory = await prisma.streetLightingAccessory.upsert({
     *   create: {
     *     // ... data to create a StreetLightingAccessory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreetLightingAccessory we want to update
     *   }
     * })
     */
    upsert<T extends StreetLightingAccessoryUpsertArgs>(args: SelectSubset<T, StreetLightingAccessoryUpsertArgs<ExtArgs>>): Prisma__StreetLightingAccessoryClient<$Result.GetResult<Prisma.$StreetLightingAccessoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreetLightingAccessories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryCountArgs} args - Arguments to filter StreetLightingAccessories to count.
     * @example
     * // Count the number of StreetLightingAccessories
     * const count = await prisma.streetLightingAccessory.count({
     *   where: {
     *     // ... the filter for the StreetLightingAccessories we want to count
     *   }
     * })
    **/
    count<T extends StreetLightingAccessoryCountArgs>(
      args?: Subset<T, StreetLightingAccessoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreetLightingAccessoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreetLightingAccessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreetLightingAccessoryAggregateArgs>(args: Subset<T, StreetLightingAccessoryAggregateArgs>): Prisma.PrismaPromise<GetStreetLightingAccessoryAggregateType<T>>

    /**
     * Group by StreetLightingAccessory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreetLightingAccessoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreetLightingAccessoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreetLightingAccessoryGroupByArgs['orderBy'] }
        : { orderBy?: StreetLightingAccessoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreetLightingAccessoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreetLightingAccessoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreetLightingAccessory model
   */
  readonly fields: StreetLightingAccessoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreetLightingAccessory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreetLightingAccessoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streetLighting<T extends StreetLightingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreetLightingDefaultArgs<ExtArgs>>): Prisma__StreetLightingClient<$Result.GetResult<Prisma.$StreetLightingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreetLightingAccessory model
   */
  interface StreetLightingAccessoryFieldRefs {
    readonly id: FieldRef<"StreetLightingAccessory", 'Int'>
    readonly name: FieldRef<"StreetLightingAccessory", 'String'>
    readonly streetlighting_id: FieldRef<"StreetLightingAccessory", 'Int'>
    readonly createdAt: FieldRef<"StreetLightingAccessory", 'DateTime'>
    readonly updatedAt: FieldRef<"StreetLightingAccessory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StreetLightingAccessory findUnique
   */
  export type StreetLightingAccessoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which StreetLightingAccessory to fetch.
     */
    where: StreetLightingAccessoryWhereUniqueInput
  }

  /**
   * StreetLightingAccessory findUniqueOrThrow
   */
  export type StreetLightingAccessoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which StreetLightingAccessory to fetch.
     */
    where: StreetLightingAccessoryWhereUniqueInput
  }

  /**
   * StreetLightingAccessory findFirst
   */
  export type StreetLightingAccessoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which StreetLightingAccessory to fetch.
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightingAccessories to fetch.
     */
    orderBy?: StreetLightingAccessoryOrderByWithRelationInput | StreetLightingAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreetLightingAccessories.
     */
    cursor?: StreetLightingAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightingAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightingAccessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreetLightingAccessories.
     */
    distinct?: StreetLightingAccessoryScalarFieldEnum | StreetLightingAccessoryScalarFieldEnum[]
  }

  /**
   * StreetLightingAccessory findFirstOrThrow
   */
  export type StreetLightingAccessoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which StreetLightingAccessory to fetch.
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightingAccessories to fetch.
     */
    orderBy?: StreetLightingAccessoryOrderByWithRelationInput | StreetLightingAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreetLightingAccessories.
     */
    cursor?: StreetLightingAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightingAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightingAccessories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreetLightingAccessories.
     */
    distinct?: StreetLightingAccessoryScalarFieldEnum | StreetLightingAccessoryScalarFieldEnum[]
  }

  /**
   * StreetLightingAccessory findMany
   */
  export type StreetLightingAccessoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * Filter, which StreetLightingAccessories to fetch.
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreetLightingAccessories to fetch.
     */
    orderBy?: StreetLightingAccessoryOrderByWithRelationInput | StreetLightingAccessoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreetLightingAccessories.
     */
    cursor?: StreetLightingAccessoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreetLightingAccessories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreetLightingAccessories.
     */
    skip?: number
    distinct?: StreetLightingAccessoryScalarFieldEnum | StreetLightingAccessoryScalarFieldEnum[]
  }

  /**
   * StreetLightingAccessory create
   */
  export type StreetLightingAccessoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StreetLightingAccessory.
     */
    data: XOR<StreetLightingAccessoryCreateInput, StreetLightingAccessoryUncheckedCreateInput>
  }

  /**
   * StreetLightingAccessory createMany
   */
  export type StreetLightingAccessoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreetLightingAccessories.
     */
    data: StreetLightingAccessoryCreateManyInput | StreetLightingAccessoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreetLightingAccessory createManyAndReturn
   */
  export type StreetLightingAccessoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * The data used to create many StreetLightingAccessories.
     */
    data: StreetLightingAccessoryCreateManyInput | StreetLightingAccessoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreetLightingAccessory update
   */
  export type StreetLightingAccessoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StreetLightingAccessory.
     */
    data: XOR<StreetLightingAccessoryUpdateInput, StreetLightingAccessoryUncheckedUpdateInput>
    /**
     * Choose, which StreetLightingAccessory to update.
     */
    where: StreetLightingAccessoryWhereUniqueInput
  }

  /**
   * StreetLightingAccessory updateMany
   */
  export type StreetLightingAccessoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreetLightingAccessories.
     */
    data: XOR<StreetLightingAccessoryUpdateManyMutationInput, StreetLightingAccessoryUncheckedUpdateManyInput>
    /**
     * Filter which StreetLightingAccessories to update
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * Limit how many StreetLightingAccessories to update.
     */
    limit?: number
  }

  /**
   * StreetLightingAccessory updateManyAndReturn
   */
  export type StreetLightingAccessoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * The data used to update StreetLightingAccessories.
     */
    data: XOR<StreetLightingAccessoryUpdateManyMutationInput, StreetLightingAccessoryUncheckedUpdateManyInput>
    /**
     * Filter which StreetLightingAccessories to update
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * Limit how many StreetLightingAccessories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreetLightingAccessory upsert
   */
  export type StreetLightingAccessoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StreetLightingAccessory to update in case it exists.
     */
    where: StreetLightingAccessoryWhereUniqueInput
    /**
     * In case the StreetLightingAccessory found by the `where` argument doesn't exist, create a new StreetLightingAccessory with this data.
     */
    create: XOR<StreetLightingAccessoryCreateInput, StreetLightingAccessoryUncheckedCreateInput>
    /**
     * In case the StreetLightingAccessory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreetLightingAccessoryUpdateInput, StreetLightingAccessoryUncheckedUpdateInput>
  }

  /**
   * StreetLightingAccessory delete
   */
  export type StreetLightingAccessoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
    /**
     * Filter which StreetLightingAccessory to delete.
     */
    where: StreetLightingAccessoryWhereUniqueInput
  }

  /**
   * StreetLightingAccessory deleteMany
   */
  export type StreetLightingAccessoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreetLightingAccessories to delete
     */
    where?: StreetLightingAccessoryWhereInput
    /**
     * Limit how many StreetLightingAccessories to delete.
     */
    limit?: number
  }

  /**
   * StreetLightingAccessory without action
   */
  export type StreetLightingAccessoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreetLightingAccessory
     */
    select?: StreetLightingAccessorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreetLightingAccessory
     */
    omit?: StreetLightingAccessoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreetLightingAccessoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    phone: 'phone',
    phoneVerified: 'phoneVerified',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const RoadFunctionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoadFunctionScalarFieldEnum = (typeof RoadFunctionScalarFieldEnum)[keyof typeof RoadFunctionScalarFieldEnum]


  export const StreetLightingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    roadfunction_id: 'roadfunction_id',
    area_id: 'area_id',
    group: 'group',
    poleType: 'poleType',
    poleHeight: 'poleHeight',
    poleMaterial: 'poleMaterial',
    status: 'status',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreetLightingScalarFieldEnum = (typeof StreetLightingScalarFieldEnum)[keyof typeof StreetLightingScalarFieldEnum]


  export const LampScalarFieldEnum: {
    id: 'id',
    streetlighting_id: 'streetlighting_id',
    brand: 'brand',
    type: 'type',
    power: 'power',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LampScalarFieldEnum = (typeof LampScalarFieldEnum)[keyof typeof LampScalarFieldEnum]


  export const StreetLightingAccessoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    streetlighting_id: 'streetlighting_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StreetLightingAccessoryScalarFieldEnum = (typeof StreetLightingAccessoryScalarFieldEnum)[keyof typeof StreetLightingAccessoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StreetLightingStatus'
   */
  export type EnumStreetLightingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreetLightingStatus'>
    


  /**
   * Reference to a field of type 'StreetLightingStatus[]'
   */
  export type ListEnumStreetLightingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StreetLightingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    phoneVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    phoneVerified?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: StringFilter<"UserRole"> | string
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserRole"> | string
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    streetLightings?: StreetLightingListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streetLightings?: StreetLightingOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    streetLightings?: StreetLightingListRelationFilter
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
  }

  export type RoadFunctionWhereInput = {
    AND?: RoadFunctionWhereInput | RoadFunctionWhereInput[]
    OR?: RoadFunctionWhereInput[]
    NOT?: RoadFunctionWhereInput | RoadFunctionWhereInput[]
    id?: StringFilter<"RoadFunction"> | string
    name?: StringFilter<"RoadFunction"> | string
    createdAt?: DateTimeFilter<"RoadFunction"> | Date | string
    updatedAt?: DateTimeFilter<"RoadFunction"> | Date | string
    streetLightings?: StreetLightingListRelationFilter
  }

  export type RoadFunctionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streetLightings?: StreetLightingOrderByRelationAggregateInput
  }

  export type RoadFunctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoadFunctionWhereInput | RoadFunctionWhereInput[]
    OR?: RoadFunctionWhereInput[]
    NOT?: RoadFunctionWhereInput | RoadFunctionWhereInput[]
    name?: StringFilter<"RoadFunction"> | string
    createdAt?: DateTimeFilter<"RoadFunction"> | Date | string
    updatedAt?: DateTimeFilter<"RoadFunction"> | Date | string
    streetLightings?: StreetLightingListRelationFilter
  }, "id">

  export type RoadFunctionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoadFunctionCountOrderByAggregateInput
    _max?: RoadFunctionMaxOrderByAggregateInput
    _min?: RoadFunctionMinOrderByAggregateInput
  }

  export type RoadFunctionScalarWhereWithAggregatesInput = {
    AND?: RoadFunctionScalarWhereWithAggregatesInput | RoadFunctionScalarWhereWithAggregatesInput[]
    OR?: RoadFunctionScalarWhereWithAggregatesInput[]
    NOT?: RoadFunctionScalarWhereWithAggregatesInput | RoadFunctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoadFunction"> | string
    name?: StringWithAggregatesFilter<"RoadFunction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoadFunction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoadFunction"> | Date | string
  }

  export type StreetLightingWhereInput = {
    AND?: StreetLightingWhereInput | StreetLightingWhereInput[]
    OR?: StreetLightingWhereInput[]
    NOT?: StreetLightingWhereInput | StreetLightingWhereInput[]
    id?: IntFilter<"StreetLighting"> | number
    name?: StringFilter<"StreetLighting"> | string
    latitude?: FloatFilter<"StreetLighting"> | number
    longitude?: FloatFilter<"StreetLighting"> | number
    roadfunction_id?: StringFilter<"StreetLighting"> | string
    area_id?: StringFilter<"StreetLighting"> | string
    group?: StringNullableFilter<"StreetLighting"> | string | null
    poleType?: StringNullableFilter<"StreetLighting"> | string | null
    poleHeight?: StringNullableFilter<"StreetLighting"> | string | null
    poleMaterial?: StringNullableFilter<"StreetLighting"> | string | null
    status?: EnumStreetLightingStatusFilter<"StreetLighting"> | $Enums.StreetLightingStatus
    location?: StringFilter<"StreetLighting"> | string
    createdAt?: DateTimeFilter<"StreetLighting"> | Date | string
    updatedAt?: DateTimeFilter<"StreetLighting"> | Date | string
    streetLightingAccessory?: StreetLightingAccessoryListRelationFilter
    lamp?: LampListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    roadFunction?: XOR<RoadFunctionScalarRelationFilter, RoadFunctionWhereInput>
  }

  export type StreetLightingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    roadfunction_id?: SortOrder
    area_id?: SortOrder
    group?: SortOrderInput | SortOrder
    poleType?: SortOrderInput | SortOrder
    poleHeight?: SortOrderInput | SortOrder
    poleMaterial?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streetLightingAccessory?: StreetLightingAccessoryOrderByRelationAggregateInput
    lamp?: LampOrderByRelationAggregateInput
    area?: AreaOrderByWithRelationInput
    roadFunction?: RoadFunctionOrderByWithRelationInput
  }

  export type StreetLightingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StreetLightingWhereInput | StreetLightingWhereInput[]
    OR?: StreetLightingWhereInput[]
    NOT?: StreetLightingWhereInput | StreetLightingWhereInput[]
    name?: StringFilter<"StreetLighting"> | string
    latitude?: FloatFilter<"StreetLighting"> | number
    longitude?: FloatFilter<"StreetLighting"> | number
    roadfunction_id?: StringFilter<"StreetLighting"> | string
    area_id?: StringFilter<"StreetLighting"> | string
    group?: StringNullableFilter<"StreetLighting"> | string | null
    poleType?: StringNullableFilter<"StreetLighting"> | string | null
    poleHeight?: StringNullableFilter<"StreetLighting"> | string | null
    poleMaterial?: StringNullableFilter<"StreetLighting"> | string | null
    status?: EnumStreetLightingStatusFilter<"StreetLighting"> | $Enums.StreetLightingStatus
    location?: StringFilter<"StreetLighting"> | string
    createdAt?: DateTimeFilter<"StreetLighting"> | Date | string
    updatedAt?: DateTimeFilter<"StreetLighting"> | Date | string
    streetLightingAccessory?: StreetLightingAccessoryListRelationFilter
    lamp?: LampListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    roadFunction?: XOR<RoadFunctionScalarRelationFilter, RoadFunctionWhereInput>
  }, "id">

  export type StreetLightingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    roadfunction_id?: SortOrder
    area_id?: SortOrder
    group?: SortOrderInput | SortOrder
    poleType?: SortOrderInput | SortOrder
    poleHeight?: SortOrderInput | SortOrder
    poleMaterial?: SortOrderInput | SortOrder
    status?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreetLightingCountOrderByAggregateInput
    _avg?: StreetLightingAvgOrderByAggregateInput
    _max?: StreetLightingMaxOrderByAggregateInput
    _min?: StreetLightingMinOrderByAggregateInput
    _sum?: StreetLightingSumOrderByAggregateInput
  }

  export type StreetLightingScalarWhereWithAggregatesInput = {
    AND?: StreetLightingScalarWhereWithAggregatesInput | StreetLightingScalarWhereWithAggregatesInput[]
    OR?: StreetLightingScalarWhereWithAggregatesInput[]
    NOT?: StreetLightingScalarWhereWithAggregatesInput | StreetLightingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StreetLighting"> | number
    name?: StringWithAggregatesFilter<"StreetLighting"> | string
    latitude?: FloatWithAggregatesFilter<"StreetLighting"> | number
    longitude?: FloatWithAggregatesFilter<"StreetLighting"> | number
    roadfunction_id?: StringWithAggregatesFilter<"StreetLighting"> | string
    area_id?: StringWithAggregatesFilter<"StreetLighting"> | string
    group?: StringNullableWithAggregatesFilter<"StreetLighting"> | string | null
    poleType?: StringNullableWithAggregatesFilter<"StreetLighting"> | string | null
    poleHeight?: StringNullableWithAggregatesFilter<"StreetLighting"> | string | null
    poleMaterial?: StringNullableWithAggregatesFilter<"StreetLighting"> | string | null
    status?: EnumStreetLightingStatusWithAggregatesFilter<"StreetLighting"> | $Enums.StreetLightingStatus
    location?: StringWithAggregatesFilter<"StreetLighting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StreetLighting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StreetLighting"> | Date | string
  }

  export type LampWhereInput = {
    AND?: LampWhereInput | LampWhereInput[]
    OR?: LampWhereInput[]
    NOT?: LampWhereInput | LampWhereInput[]
    id?: IntFilter<"Lamp"> | number
    streetlighting_id?: IntFilter<"Lamp"> | number
    brand?: StringFilter<"Lamp"> | string
    type?: StringFilter<"Lamp"> | string
    power?: StringFilter<"Lamp"> | string
    createdAt?: DateTimeFilter<"Lamp"> | Date | string
    updatedAt?: DateTimeFilter<"Lamp"> | Date | string
    streetLighting?: XOR<StreetLightingScalarRelationFilter, StreetLightingWhereInput>
  }

  export type LampOrderByWithRelationInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    power?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streetLighting?: StreetLightingOrderByWithRelationInput
  }

  export type LampWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LampWhereInput | LampWhereInput[]
    OR?: LampWhereInput[]
    NOT?: LampWhereInput | LampWhereInput[]
    streetlighting_id?: IntFilter<"Lamp"> | number
    brand?: StringFilter<"Lamp"> | string
    type?: StringFilter<"Lamp"> | string
    power?: StringFilter<"Lamp"> | string
    createdAt?: DateTimeFilter<"Lamp"> | Date | string
    updatedAt?: DateTimeFilter<"Lamp"> | Date | string
    streetLighting?: XOR<StreetLightingScalarRelationFilter, StreetLightingWhereInput>
  }, "id">

  export type LampOrderByWithAggregationInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    power?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LampCountOrderByAggregateInput
    _avg?: LampAvgOrderByAggregateInput
    _max?: LampMaxOrderByAggregateInput
    _min?: LampMinOrderByAggregateInput
    _sum?: LampSumOrderByAggregateInput
  }

  export type LampScalarWhereWithAggregatesInput = {
    AND?: LampScalarWhereWithAggregatesInput | LampScalarWhereWithAggregatesInput[]
    OR?: LampScalarWhereWithAggregatesInput[]
    NOT?: LampScalarWhereWithAggregatesInput | LampScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lamp"> | number
    streetlighting_id?: IntWithAggregatesFilter<"Lamp"> | number
    brand?: StringWithAggregatesFilter<"Lamp"> | string
    type?: StringWithAggregatesFilter<"Lamp"> | string
    power?: StringWithAggregatesFilter<"Lamp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lamp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lamp"> | Date | string
  }

  export type StreetLightingAccessoryWhereInput = {
    AND?: StreetLightingAccessoryWhereInput | StreetLightingAccessoryWhereInput[]
    OR?: StreetLightingAccessoryWhereInput[]
    NOT?: StreetLightingAccessoryWhereInput | StreetLightingAccessoryWhereInput[]
    id?: IntFilter<"StreetLightingAccessory"> | number
    name?: StringFilter<"StreetLightingAccessory"> | string
    streetlighting_id?: IntFilter<"StreetLightingAccessory"> | number
    createdAt?: DateTimeFilter<"StreetLightingAccessory"> | Date | string
    updatedAt?: DateTimeFilter<"StreetLightingAccessory"> | Date | string
    streetLighting?: XOR<StreetLightingScalarRelationFilter, StreetLightingWhereInput>
  }

  export type StreetLightingAccessoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    streetlighting_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    streetLighting?: StreetLightingOrderByWithRelationInput
  }

  export type StreetLightingAccessoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StreetLightingAccessoryWhereInput | StreetLightingAccessoryWhereInput[]
    OR?: StreetLightingAccessoryWhereInput[]
    NOT?: StreetLightingAccessoryWhereInput | StreetLightingAccessoryWhereInput[]
    name?: StringFilter<"StreetLightingAccessory"> | string
    streetlighting_id?: IntFilter<"StreetLightingAccessory"> | number
    createdAt?: DateTimeFilter<"StreetLightingAccessory"> | Date | string
    updatedAt?: DateTimeFilter<"StreetLightingAccessory"> | Date | string
    streetLighting?: XOR<StreetLightingScalarRelationFilter, StreetLightingWhereInput>
  }, "id">

  export type StreetLightingAccessoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    streetlighting_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StreetLightingAccessoryCountOrderByAggregateInput
    _avg?: StreetLightingAccessoryAvgOrderByAggregateInput
    _max?: StreetLightingAccessoryMaxOrderByAggregateInput
    _min?: StreetLightingAccessoryMinOrderByAggregateInput
    _sum?: StreetLightingAccessorySumOrderByAggregateInput
  }

  export type StreetLightingAccessoryScalarWhereWithAggregatesInput = {
    AND?: StreetLightingAccessoryScalarWhereWithAggregatesInput | StreetLightingAccessoryScalarWhereWithAggregatesInput[]
    OR?: StreetLightingAccessoryScalarWhereWithAggregatesInput[]
    NOT?: StreetLightingAccessoryScalarWhereWithAggregatesInput | StreetLightingAccessoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StreetLightingAccessory"> | number
    name?: StringWithAggregatesFilter<"StreetLightingAccessory"> | string
    streetlighting_id?: IntWithAggregatesFilter<"StreetLightingAccessory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StreetLightingAccessory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StreetLightingAccessory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: string
    userId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyInput = {
    id?: string
    userId: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightings?: StreetLightingCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightings?: StreetLightingUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightings?: StreetLightingUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightings?: StreetLightingUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadFunctionCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightings?: StreetLightingCreateNestedManyWithoutRoadFunctionInput
  }

  export type RoadFunctionUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightings?: StreetLightingUncheckedCreateNestedManyWithoutRoadFunctionInput
  }

  export type RoadFunctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightings?: StreetLightingUpdateManyWithoutRoadFunctionNestedInput
  }

  export type RoadFunctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightings?: StreetLightingUncheckedUpdateManyWithoutRoadFunctionNestedInput
  }

  export type RoadFunctionCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadFunctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadFunctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingCreateInput = {
    name: string
    latitude: number
    longitude: number
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryCreateNestedManyWithoutStreetLightingInput
    lamp?: LampCreateNestedManyWithoutStreetLightingInput
    area: AreaCreateNestedOneWithoutStreetLightingsInput
    roadFunction: RoadFunctionCreateNestedOneWithoutStreetLightingsInput
  }

  export type StreetLightingUncheckedCreateInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    area_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedCreateNestedManyWithoutStreetLightingInput
    lamp?: LampUncheckedCreateNestedManyWithoutStreetLightingInput
  }

  export type StreetLightingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUpdateManyWithoutStreetLightingNestedInput
    lamp?: LampUpdateManyWithoutStreetLightingNestedInput
    area?: AreaUpdateOneRequiredWithoutStreetLightingsNestedInput
    roadFunction?: RoadFunctionUpdateOneRequiredWithoutStreetLightingsNestedInput
  }

  export type StreetLightingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    roadfunction_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingNestedInput
    lamp?: LampUncheckedUpdateManyWithoutStreetLightingNestedInput
  }

  export type StreetLightingCreateManyInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    area_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    roadfunction_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampCreateInput = {
    brand: string
    type: string
    power: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLighting: StreetLightingCreateNestedOneWithoutLampInput
  }

  export type LampUncheckedCreateInput = {
    id?: number
    streetlighting_id: number
    brand: string
    type: string
    power: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLighting?: StreetLightingUpdateOneRequiredWithoutLampNestedInput
  }

  export type LampUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetlighting_id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampCreateManyInput = {
    id?: number
    streetlighting_id: number
    brand: string
    type: string
    power: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    streetlighting_id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingAccessoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLighting: StreetLightingCreateNestedOneWithoutStreetLightingAccessoryInput
  }

  export type StreetLightingAccessoryUncheckedCreateInput = {
    id?: number
    name: string
    streetlighting_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingAccessoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLighting?: StreetLightingUpdateOneRequiredWithoutStreetLightingAccessoryNestedInput
  }

  export type StreetLightingAccessoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetlighting_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingAccessoryCreateManyInput = {
    id?: number
    name: string
    streetlighting_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingAccessoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingAccessoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    streetlighting_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    phone?: SortOrder
    phoneVerified?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingListRelationFilter = {
    every?: StreetLightingWhereInput
    some?: StreetLightingWhereInput
    none?: StreetLightingWhereInput
  }

  export type StreetLightingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadFunctionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadFunctionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoadFunctionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumStreetLightingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StreetLightingStatus | EnumStreetLightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreetLightingStatusFilter<$PrismaModel> | $Enums.StreetLightingStatus
  }

  export type StreetLightingAccessoryListRelationFilter = {
    every?: StreetLightingAccessoryWhereInput
    some?: StreetLightingAccessoryWhereInput
    none?: StreetLightingAccessoryWhereInput
  }

  export type LampListRelationFilter = {
    every?: LampWhereInput
    some?: LampWhereInput
    none?: LampWhereInput
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type RoadFunctionScalarRelationFilter = {
    is?: RoadFunctionWhereInput
    isNot?: RoadFunctionWhereInput
  }

  export type StreetLightingAccessoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LampOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreetLightingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    roadfunction_id?: SortOrder
    area_id?: SortOrder
    group?: SortOrder
    poleType?: SortOrder
    poleHeight?: SortOrder
    poleMaterial?: SortOrder
    status?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StreetLightingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    roadfunction_id?: SortOrder
    area_id?: SortOrder
    group?: SortOrder
    poleType?: SortOrder
    poleHeight?: SortOrder
    poleMaterial?: SortOrder
    status?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    roadfunction_id?: SortOrder
    area_id?: SortOrder
    group?: SortOrder
    poleType?: SortOrder
    poleHeight?: SortOrder
    poleMaterial?: SortOrder
    status?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStreetLightingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreetLightingStatus | EnumStreetLightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreetLightingStatusWithAggregatesFilter<$PrismaModel> | $Enums.StreetLightingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreetLightingStatusFilter<$PrismaModel>
    _max?: NestedEnumStreetLightingStatusFilter<$PrismaModel>
  }

  export type StreetLightingScalarRelationFilter = {
    is?: StreetLightingWhereInput
    isNot?: StreetLightingWhereInput
  }

  export type LampCountOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    power?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LampAvgOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
  }

  export type LampMaxOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    power?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LampMinOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    power?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LampSumOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
  }

  export type StreetLightingAccessoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streetlighting_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingAccessoryAvgOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
  }

  export type StreetLightingAccessoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streetlighting_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingAccessoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    streetlighting_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreetLightingAccessorySumOrderByAggregateInput = {
    id?: SortOrder
    streetlighting_id?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type StreetLightingCreateNestedManyWithoutAreaInput = {
    create?: XOR<StreetLightingCreateWithoutAreaInput, StreetLightingUncheckedCreateWithoutAreaInput> | StreetLightingCreateWithoutAreaInput[] | StreetLightingUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutAreaInput | StreetLightingCreateOrConnectWithoutAreaInput[]
    createMany?: StreetLightingCreateManyAreaInputEnvelope
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
  }

  export type StreetLightingUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<StreetLightingCreateWithoutAreaInput, StreetLightingUncheckedCreateWithoutAreaInput> | StreetLightingCreateWithoutAreaInput[] | StreetLightingUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutAreaInput | StreetLightingCreateOrConnectWithoutAreaInput[]
    createMany?: StreetLightingCreateManyAreaInputEnvelope
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
  }

  export type StreetLightingUpdateManyWithoutAreaNestedInput = {
    create?: XOR<StreetLightingCreateWithoutAreaInput, StreetLightingUncheckedCreateWithoutAreaInput> | StreetLightingCreateWithoutAreaInput[] | StreetLightingUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutAreaInput | StreetLightingCreateOrConnectWithoutAreaInput[]
    upsert?: StreetLightingUpsertWithWhereUniqueWithoutAreaInput | StreetLightingUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: StreetLightingCreateManyAreaInputEnvelope
    set?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    disconnect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    delete?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    update?: StreetLightingUpdateWithWhereUniqueWithoutAreaInput | StreetLightingUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: StreetLightingUpdateManyWithWhereWithoutAreaInput | StreetLightingUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: StreetLightingScalarWhereInput | StreetLightingScalarWhereInput[]
  }

  export type StreetLightingUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<StreetLightingCreateWithoutAreaInput, StreetLightingUncheckedCreateWithoutAreaInput> | StreetLightingCreateWithoutAreaInput[] | StreetLightingUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutAreaInput | StreetLightingCreateOrConnectWithoutAreaInput[]
    upsert?: StreetLightingUpsertWithWhereUniqueWithoutAreaInput | StreetLightingUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: StreetLightingCreateManyAreaInputEnvelope
    set?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    disconnect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    delete?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    update?: StreetLightingUpdateWithWhereUniqueWithoutAreaInput | StreetLightingUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: StreetLightingUpdateManyWithWhereWithoutAreaInput | StreetLightingUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: StreetLightingScalarWhereInput | StreetLightingScalarWhereInput[]
  }

  export type StreetLightingCreateNestedManyWithoutRoadFunctionInput = {
    create?: XOR<StreetLightingCreateWithoutRoadFunctionInput, StreetLightingUncheckedCreateWithoutRoadFunctionInput> | StreetLightingCreateWithoutRoadFunctionInput[] | StreetLightingUncheckedCreateWithoutRoadFunctionInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutRoadFunctionInput | StreetLightingCreateOrConnectWithoutRoadFunctionInput[]
    createMany?: StreetLightingCreateManyRoadFunctionInputEnvelope
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
  }

  export type StreetLightingUncheckedCreateNestedManyWithoutRoadFunctionInput = {
    create?: XOR<StreetLightingCreateWithoutRoadFunctionInput, StreetLightingUncheckedCreateWithoutRoadFunctionInput> | StreetLightingCreateWithoutRoadFunctionInput[] | StreetLightingUncheckedCreateWithoutRoadFunctionInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutRoadFunctionInput | StreetLightingCreateOrConnectWithoutRoadFunctionInput[]
    createMany?: StreetLightingCreateManyRoadFunctionInputEnvelope
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
  }

  export type StreetLightingUpdateManyWithoutRoadFunctionNestedInput = {
    create?: XOR<StreetLightingCreateWithoutRoadFunctionInput, StreetLightingUncheckedCreateWithoutRoadFunctionInput> | StreetLightingCreateWithoutRoadFunctionInput[] | StreetLightingUncheckedCreateWithoutRoadFunctionInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutRoadFunctionInput | StreetLightingCreateOrConnectWithoutRoadFunctionInput[]
    upsert?: StreetLightingUpsertWithWhereUniqueWithoutRoadFunctionInput | StreetLightingUpsertWithWhereUniqueWithoutRoadFunctionInput[]
    createMany?: StreetLightingCreateManyRoadFunctionInputEnvelope
    set?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    disconnect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    delete?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    update?: StreetLightingUpdateWithWhereUniqueWithoutRoadFunctionInput | StreetLightingUpdateWithWhereUniqueWithoutRoadFunctionInput[]
    updateMany?: StreetLightingUpdateManyWithWhereWithoutRoadFunctionInput | StreetLightingUpdateManyWithWhereWithoutRoadFunctionInput[]
    deleteMany?: StreetLightingScalarWhereInput | StreetLightingScalarWhereInput[]
  }

  export type StreetLightingUncheckedUpdateManyWithoutRoadFunctionNestedInput = {
    create?: XOR<StreetLightingCreateWithoutRoadFunctionInput, StreetLightingUncheckedCreateWithoutRoadFunctionInput> | StreetLightingCreateWithoutRoadFunctionInput[] | StreetLightingUncheckedCreateWithoutRoadFunctionInput[]
    connectOrCreate?: StreetLightingCreateOrConnectWithoutRoadFunctionInput | StreetLightingCreateOrConnectWithoutRoadFunctionInput[]
    upsert?: StreetLightingUpsertWithWhereUniqueWithoutRoadFunctionInput | StreetLightingUpsertWithWhereUniqueWithoutRoadFunctionInput[]
    createMany?: StreetLightingCreateManyRoadFunctionInputEnvelope
    set?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    disconnect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    delete?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    connect?: StreetLightingWhereUniqueInput | StreetLightingWhereUniqueInput[]
    update?: StreetLightingUpdateWithWhereUniqueWithoutRoadFunctionInput | StreetLightingUpdateWithWhereUniqueWithoutRoadFunctionInput[]
    updateMany?: StreetLightingUpdateManyWithWhereWithoutRoadFunctionInput | StreetLightingUpdateManyWithWhereWithoutRoadFunctionInput[]
    deleteMany?: StreetLightingScalarWhereInput | StreetLightingScalarWhereInput[]
  }

  export type StreetLightingAccessoryCreateNestedManyWithoutStreetLightingInput = {
    create?: XOR<StreetLightingAccessoryCreateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput> | StreetLightingAccessoryCreateWithoutStreetLightingInput[] | StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput | StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput[]
    createMany?: StreetLightingAccessoryCreateManyStreetLightingInputEnvelope
    connect?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
  }

  export type LampCreateNestedManyWithoutStreetLightingInput = {
    create?: XOR<LampCreateWithoutStreetLightingInput, LampUncheckedCreateWithoutStreetLightingInput> | LampCreateWithoutStreetLightingInput[] | LampUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: LampCreateOrConnectWithoutStreetLightingInput | LampCreateOrConnectWithoutStreetLightingInput[]
    createMany?: LampCreateManyStreetLightingInputEnvelope
    connect?: LampWhereUniqueInput | LampWhereUniqueInput[]
  }

  export type AreaCreateNestedOneWithoutStreetLightingsInput = {
    create?: XOR<AreaCreateWithoutStreetLightingsInput, AreaUncheckedCreateWithoutStreetLightingsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutStreetLightingsInput
    connect?: AreaWhereUniqueInput
  }

  export type RoadFunctionCreateNestedOneWithoutStreetLightingsInput = {
    create?: XOR<RoadFunctionCreateWithoutStreetLightingsInput, RoadFunctionUncheckedCreateWithoutStreetLightingsInput>
    connectOrCreate?: RoadFunctionCreateOrConnectWithoutStreetLightingsInput
    connect?: RoadFunctionWhereUniqueInput
  }

  export type StreetLightingAccessoryUncheckedCreateNestedManyWithoutStreetLightingInput = {
    create?: XOR<StreetLightingAccessoryCreateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput> | StreetLightingAccessoryCreateWithoutStreetLightingInput[] | StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput | StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput[]
    createMany?: StreetLightingAccessoryCreateManyStreetLightingInputEnvelope
    connect?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
  }

  export type LampUncheckedCreateNestedManyWithoutStreetLightingInput = {
    create?: XOR<LampCreateWithoutStreetLightingInput, LampUncheckedCreateWithoutStreetLightingInput> | LampCreateWithoutStreetLightingInput[] | LampUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: LampCreateOrConnectWithoutStreetLightingInput | LampCreateOrConnectWithoutStreetLightingInput[]
    createMany?: LampCreateManyStreetLightingInputEnvelope
    connect?: LampWhereUniqueInput | LampWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStreetLightingStatusFieldUpdateOperationsInput = {
    set?: $Enums.StreetLightingStatus
  }

  export type StreetLightingAccessoryUpdateManyWithoutStreetLightingNestedInput = {
    create?: XOR<StreetLightingAccessoryCreateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput> | StreetLightingAccessoryCreateWithoutStreetLightingInput[] | StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput | StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput[]
    upsert?: StreetLightingAccessoryUpsertWithWhereUniqueWithoutStreetLightingInput | StreetLightingAccessoryUpsertWithWhereUniqueWithoutStreetLightingInput[]
    createMany?: StreetLightingAccessoryCreateManyStreetLightingInputEnvelope
    set?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    disconnect?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    delete?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    connect?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    update?: StreetLightingAccessoryUpdateWithWhereUniqueWithoutStreetLightingInput | StreetLightingAccessoryUpdateWithWhereUniqueWithoutStreetLightingInput[]
    updateMany?: StreetLightingAccessoryUpdateManyWithWhereWithoutStreetLightingInput | StreetLightingAccessoryUpdateManyWithWhereWithoutStreetLightingInput[]
    deleteMany?: StreetLightingAccessoryScalarWhereInput | StreetLightingAccessoryScalarWhereInput[]
  }

  export type LampUpdateManyWithoutStreetLightingNestedInput = {
    create?: XOR<LampCreateWithoutStreetLightingInput, LampUncheckedCreateWithoutStreetLightingInput> | LampCreateWithoutStreetLightingInput[] | LampUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: LampCreateOrConnectWithoutStreetLightingInput | LampCreateOrConnectWithoutStreetLightingInput[]
    upsert?: LampUpsertWithWhereUniqueWithoutStreetLightingInput | LampUpsertWithWhereUniqueWithoutStreetLightingInput[]
    createMany?: LampCreateManyStreetLightingInputEnvelope
    set?: LampWhereUniqueInput | LampWhereUniqueInput[]
    disconnect?: LampWhereUniqueInput | LampWhereUniqueInput[]
    delete?: LampWhereUniqueInput | LampWhereUniqueInput[]
    connect?: LampWhereUniqueInput | LampWhereUniqueInput[]
    update?: LampUpdateWithWhereUniqueWithoutStreetLightingInput | LampUpdateWithWhereUniqueWithoutStreetLightingInput[]
    updateMany?: LampUpdateManyWithWhereWithoutStreetLightingInput | LampUpdateManyWithWhereWithoutStreetLightingInput[]
    deleteMany?: LampScalarWhereInput | LampScalarWhereInput[]
  }

  export type AreaUpdateOneRequiredWithoutStreetLightingsNestedInput = {
    create?: XOR<AreaCreateWithoutStreetLightingsInput, AreaUncheckedCreateWithoutStreetLightingsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutStreetLightingsInput
    upsert?: AreaUpsertWithoutStreetLightingsInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutStreetLightingsInput, AreaUpdateWithoutStreetLightingsInput>, AreaUncheckedUpdateWithoutStreetLightingsInput>
  }

  export type RoadFunctionUpdateOneRequiredWithoutStreetLightingsNestedInput = {
    create?: XOR<RoadFunctionCreateWithoutStreetLightingsInput, RoadFunctionUncheckedCreateWithoutStreetLightingsInput>
    connectOrCreate?: RoadFunctionCreateOrConnectWithoutStreetLightingsInput
    upsert?: RoadFunctionUpsertWithoutStreetLightingsInput
    connect?: RoadFunctionWhereUniqueInput
    update?: XOR<XOR<RoadFunctionUpdateToOneWithWhereWithoutStreetLightingsInput, RoadFunctionUpdateWithoutStreetLightingsInput>, RoadFunctionUncheckedUpdateWithoutStreetLightingsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingNestedInput = {
    create?: XOR<StreetLightingAccessoryCreateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput> | StreetLightingAccessoryCreateWithoutStreetLightingInput[] | StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput | StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput[]
    upsert?: StreetLightingAccessoryUpsertWithWhereUniqueWithoutStreetLightingInput | StreetLightingAccessoryUpsertWithWhereUniqueWithoutStreetLightingInput[]
    createMany?: StreetLightingAccessoryCreateManyStreetLightingInputEnvelope
    set?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    disconnect?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    delete?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    connect?: StreetLightingAccessoryWhereUniqueInput | StreetLightingAccessoryWhereUniqueInput[]
    update?: StreetLightingAccessoryUpdateWithWhereUniqueWithoutStreetLightingInput | StreetLightingAccessoryUpdateWithWhereUniqueWithoutStreetLightingInput[]
    updateMany?: StreetLightingAccessoryUpdateManyWithWhereWithoutStreetLightingInput | StreetLightingAccessoryUpdateManyWithWhereWithoutStreetLightingInput[]
    deleteMany?: StreetLightingAccessoryScalarWhereInput | StreetLightingAccessoryScalarWhereInput[]
  }

  export type LampUncheckedUpdateManyWithoutStreetLightingNestedInput = {
    create?: XOR<LampCreateWithoutStreetLightingInput, LampUncheckedCreateWithoutStreetLightingInput> | LampCreateWithoutStreetLightingInput[] | LampUncheckedCreateWithoutStreetLightingInput[]
    connectOrCreate?: LampCreateOrConnectWithoutStreetLightingInput | LampCreateOrConnectWithoutStreetLightingInput[]
    upsert?: LampUpsertWithWhereUniqueWithoutStreetLightingInput | LampUpsertWithWhereUniqueWithoutStreetLightingInput[]
    createMany?: LampCreateManyStreetLightingInputEnvelope
    set?: LampWhereUniqueInput | LampWhereUniqueInput[]
    disconnect?: LampWhereUniqueInput | LampWhereUniqueInput[]
    delete?: LampWhereUniqueInput | LampWhereUniqueInput[]
    connect?: LampWhereUniqueInput | LampWhereUniqueInput[]
    update?: LampUpdateWithWhereUniqueWithoutStreetLightingInput | LampUpdateWithWhereUniqueWithoutStreetLightingInput[]
    updateMany?: LampUpdateManyWithWhereWithoutStreetLightingInput | LampUpdateManyWithWhereWithoutStreetLightingInput[]
    deleteMany?: LampScalarWhereInput | LampScalarWhereInput[]
  }

  export type StreetLightingCreateNestedOneWithoutLampInput = {
    create?: XOR<StreetLightingCreateWithoutLampInput, StreetLightingUncheckedCreateWithoutLampInput>
    connectOrCreate?: StreetLightingCreateOrConnectWithoutLampInput
    connect?: StreetLightingWhereUniqueInput
  }

  export type StreetLightingUpdateOneRequiredWithoutLampNestedInput = {
    create?: XOR<StreetLightingCreateWithoutLampInput, StreetLightingUncheckedCreateWithoutLampInput>
    connectOrCreate?: StreetLightingCreateOrConnectWithoutLampInput
    upsert?: StreetLightingUpsertWithoutLampInput
    connect?: StreetLightingWhereUniqueInput
    update?: XOR<XOR<StreetLightingUpdateToOneWithWhereWithoutLampInput, StreetLightingUpdateWithoutLampInput>, StreetLightingUncheckedUpdateWithoutLampInput>
  }

  export type StreetLightingCreateNestedOneWithoutStreetLightingAccessoryInput = {
    create?: XOR<StreetLightingCreateWithoutStreetLightingAccessoryInput, StreetLightingUncheckedCreateWithoutStreetLightingAccessoryInput>
    connectOrCreate?: StreetLightingCreateOrConnectWithoutStreetLightingAccessoryInput
    connect?: StreetLightingWhereUniqueInput
  }

  export type StreetLightingUpdateOneRequiredWithoutStreetLightingAccessoryNestedInput = {
    create?: XOR<StreetLightingCreateWithoutStreetLightingAccessoryInput, StreetLightingUncheckedCreateWithoutStreetLightingAccessoryInput>
    connectOrCreate?: StreetLightingCreateOrConnectWithoutStreetLightingAccessoryInput
    upsert?: StreetLightingUpsertWithoutStreetLightingAccessoryInput
    connect?: StreetLightingWhereUniqueInput
    update?: XOR<XOR<StreetLightingUpdateToOneWithWhereWithoutStreetLightingAccessoryInput, StreetLightingUpdateWithoutStreetLightingAccessoryInput>, StreetLightingUncheckedUpdateWithoutStreetLightingAccessoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStreetLightingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StreetLightingStatus | EnumStreetLightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreetLightingStatusFilter<$PrismaModel> | $Enums.StreetLightingStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStreetLightingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StreetLightingStatus | EnumStreetLightingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StreetLightingStatus[] | ListEnumStreetLightingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStreetLightingStatusWithAggregatesFilter<$PrismaModel> | $Enums.StreetLightingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStreetLightingStatusFilter<$PrismaModel>
    _max?: NestedEnumStreetLightingStatusFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    id?: StringFilter<"UserRole"> | string
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    updatedAt?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    phone?: string | null
    phoneVerified?: Date | string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    phoneVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingCreateWithoutAreaInput = {
    name: string
    latitude: number
    longitude: number
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryCreateNestedManyWithoutStreetLightingInput
    lamp?: LampCreateNestedManyWithoutStreetLightingInput
    roadFunction: RoadFunctionCreateNestedOneWithoutStreetLightingsInput
  }

  export type StreetLightingUncheckedCreateWithoutAreaInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedCreateNestedManyWithoutStreetLightingInput
    lamp?: LampUncheckedCreateNestedManyWithoutStreetLightingInput
  }

  export type StreetLightingCreateOrConnectWithoutAreaInput = {
    where: StreetLightingWhereUniqueInput
    create: XOR<StreetLightingCreateWithoutAreaInput, StreetLightingUncheckedCreateWithoutAreaInput>
  }

  export type StreetLightingCreateManyAreaInputEnvelope = {
    data: StreetLightingCreateManyAreaInput | StreetLightingCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type StreetLightingUpsertWithWhereUniqueWithoutAreaInput = {
    where: StreetLightingWhereUniqueInput
    update: XOR<StreetLightingUpdateWithoutAreaInput, StreetLightingUncheckedUpdateWithoutAreaInput>
    create: XOR<StreetLightingCreateWithoutAreaInput, StreetLightingUncheckedCreateWithoutAreaInput>
  }

  export type StreetLightingUpdateWithWhereUniqueWithoutAreaInput = {
    where: StreetLightingWhereUniqueInput
    data: XOR<StreetLightingUpdateWithoutAreaInput, StreetLightingUncheckedUpdateWithoutAreaInput>
  }

  export type StreetLightingUpdateManyWithWhereWithoutAreaInput = {
    where: StreetLightingScalarWhereInput
    data: XOR<StreetLightingUpdateManyMutationInput, StreetLightingUncheckedUpdateManyWithoutAreaInput>
  }

  export type StreetLightingScalarWhereInput = {
    AND?: StreetLightingScalarWhereInput | StreetLightingScalarWhereInput[]
    OR?: StreetLightingScalarWhereInput[]
    NOT?: StreetLightingScalarWhereInput | StreetLightingScalarWhereInput[]
    id?: IntFilter<"StreetLighting"> | number
    name?: StringFilter<"StreetLighting"> | string
    latitude?: FloatFilter<"StreetLighting"> | number
    longitude?: FloatFilter<"StreetLighting"> | number
    roadfunction_id?: StringFilter<"StreetLighting"> | string
    area_id?: StringFilter<"StreetLighting"> | string
    group?: StringNullableFilter<"StreetLighting"> | string | null
    poleType?: StringNullableFilter<"StreetLighting"> | string | null
    poleHeight?: StringNullableFilter<"StreetLighting"> | string | null
    poleMaterial?: StringNullableFilter<"StreetLighting"> | string | null
    status?: EnumStreetLightingStatusFilter<"StreetLighting"> | $Enums.StreetLightingStatus
    location?: StringFilter<"StreetLighting"> | string
    createdAt?: DateTimeFilter<"StreetLighting"> | Date | string
    updatedAt?: DateTimeFilter<"StreetLighting"> | Date | string
  }

  export type StreetLightingCreateWithoutRoadFunctionInput = {
    name: string
    latitude: number
    longitude: number
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryCreateNestedManyWithoutStreetLightingInput
    lamp?: LampCreateNestedManyWithoutStreetLightingInput
    area: AreaCreateNestedOneWithoutStreetLightingsInput
  }

  export type StreetLightingUncheckedCreateWithoutRoadFunctionInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    area_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedCreateNestedManyWithoutStreetLightingInput
    lamp?: LampUncheckedCreateNestedManyWithoutStreetLightingInput
  }

  export type StreetLightingCreateOrConnectWithoutRoadFunctionInput = {
    where: StreetLightingWhereUniqueInput
    create: XOR<StreetLightingCreateWithoutRoadFunctionInput, StreetLightingUncheckedCreateWithoutRoadFunctionInput>
  }

  export type StreetLightingCreateManyRoadFunctionInputEnvelope = {
    data: StreetLightingCreateManyRoadFunctionInput | StreetLightingCreateManyRoadFunctionInput[]
    skipDuplicates?: boolean
  }

  export type StreetLightingUpsertWithWhereUniqueWithoutRoadFunctionInput = {
    where: StreetLightingWhereUniqueInput
    update: XOR<StreetLightingUpdateWithoutRoadFunctionInput, StreetLightingUncheckedUpdateWithoutRoadFunctionInput>
    create: XOR<StreetLightingCreateWithoutRoadFunctionInput, StreetLightingUncheckedCreateWithoutRoadFunctionInput>
  }

  export type StreetLightingUpdateWithWhereUniqueWithoutRoadFunctionInput = {
    where: StreetLightingWhereUniqueInput
    data: XOR<StreetLightingUpdateWithoutRoadFunctionInput, StreetLightingUncheckedUpdateWithoutRoadFunctionInput>
  }

  export type StreetLightingUpdateManyWithWhereWithoutRoadFunctionInput = {
    where: StreetLightingScalarWhereInput
    data: XOR<StreetLightingUpdateManyMutationInput, StreetLightingUncheckedUpdateManyWithoutRoadFunctionInput>
  }

  export type StreetLightingAccessoryCreateWithoutStreetLightingInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingAccessoryCreateOrConnectWithoutStreetLightingInput = {
    where: StreetLightingAccessoryWhereUniqueInput
    create: XOR<StreetLightingAccessoryCreateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput>
  }

  export type StreetLightingAccessoryCreateManyStreetLightingInputEnvelope = {
    data: StreetLightingAccessoryCreateManyStreetLightingInput | StreetLightingAccessoryCreateManyStreetLightingInput[]
    skipDuplicates?: boolean
  }

  export type LampCreateWithoutStreetLightingInput = {
    brand: string
    type: string
    power: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampUncheckedCreateWithoutStreetLightingInput = {
    id?: number
    brand: string
    type: string
    power: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampCreateOrConnectWithoutStreetLightingInput = {
    where: LampWhereUniqueInput
    create: XOR<LampCreateWithoutStreetLightingInput, LampUncheckedCreateWithoutStreetLightingInput>
  }

  export type LampCreateManyStreetLightingInputEnvelope = {
    data: LampCreateManyStreetLightingInput | LampCreateManyStreetLightingInput[]
    skipDuplicates?: boolean
  }

  export type AreaCreateWithoutStreetLightingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaUncheckedCreateWithoutStreetLightingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaCreateOrConnectWithoutStreetLightingsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutStreetLightingsInput, AreaUncheckedCreateWithoutStreetLightingsInput>
  }

  export type RoadFunctionCreateWithoutStreetLightingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadFunctionUncheckedCreateWithoutStreetLightingsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoadFunctionCreateOrConnectWithoutStreetLightingsInput = {
    where: RoadFunctionWhereUniqueInput
    create: XOR<RoadFunctionCreateWithoutStreetLightingsInput, RoadFunctionUncheckedCreateWithoutStreetLightingsInput>
  }

  export type StreetLightingAccessoryUpsertWithWhereUniqueWithoutStreetLightingInput = {
    where: StreetLightingAccessoryWhereUniqueInput
    update: XOR<StreetLightingAccessoryUpdateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedUpdateWithoutStreetLightingInput>
    create: XOR<StreetLightingAccessoryCreateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedCreateWithoutStreetLightingInput>
  }

  export type StreetLightingAccessoryUpdateWithWhereUniqueWithoutStreetLightingInput = {
    where: StreetLightingAccessoryWhereUniqueInput
    data: XOR<StreetLightingAccessoryUpdateWithoutStreetLightingInput, StreetLightingAccessoryUncheckedUpdateWithoutStreetLightingInput>
  }

  export type StreetLightingAccessoryUpdateManyWithWhereWithoutStreetLightingInput = {
    where: StreetLightingAccessoryScalarWhereInput
    data: XOR<StreetLightingAccessoryUpdateManyMutationInput, StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingInput>
  }

  export type StreetLightingAccessoryScalarWhereInput = {
    AND?: StreetLightingAccessoryScalarWhereInput | StreetLightingAccessoryScalarWhereInput[]
    OR?: StreetLightingAccessoryScalarWhereInput[]
    NOT?: StreetLightingAccessoryScalarWhereInput | StreetLightingAccessoryScalarWhereInput[]
    id?: IntFilter<"StreetLightingAccessory"> | number
    name?: StringFilter<"StreetLightingAccessory"> | string
    streetlighting_id?: IntFilter<"StreetLightingAccessory"> | number
    createdAt?: DateTimeFilter<"StreetLightingAccessory"> | Date | string
    updatedAt?: DateTimeFilter<"StreetLightingAccessory"> | Date | string
  }

  export type LampUpsertWithWhereUniqueWithoutStreetLightingInput = {
    where: LampWhereUniqueInput
    update: XOR<LampUpdateWithoutStreetLightingInput, LampUncheckedUpdateWithoutStreetLightingInput>
    create: XOR<LampCreateWithoutStreetLightingInput, LampUncheckedCreateWithoutStreetLightingInput>
  }

  export type LampUpdateWithWhereUniqueWithoutStreetLightingInput = {
    where: LampWhereUniqueInput
    data: XOR<LampUpdateWithoutStreetLightingInput, LampUncheckedUpdateWithoutStreetLightingInput>
  }

  export type LampUpdateManyWithWhereWithoutStreetLightingInput = {
    where: LampScalarWhereInput
    data: XOR<LampUpdateManyMutationInput, LampUncheckedUpdateManyWithoutStreetLightingInput>
  }

  export type LampScalarWhereInput = {
    AND?: LampScalarWhereInput | LampScalarWhereInput[]
    OR?: LampScalarWhereInput[]
    NOT?: LampScalarWhereInput | LampScalarWhereInput[]
    id?: IntFilter<"Lamp"> | number
    streetlighting_id?: IntFilter<"Lamp"> | number
    brand?: StringFilter<"Lamp"> | string
    type?: StringFilter<"Lamp"> | string
    power?: StringFilter<"Lamp"> | string
    createdAt?: DateTimeFilter<"Lamp"> | Date | string
    updatedAt?: DateTimeFilter<"Lamp"> | Date | string
  }

  export type AreaUpsertWithoutStreetLightingsInput = {
    update: XOR<AreaUpdateWithoutStreetLightingsInput, AreaUncheckedUpdateWithoutStreetLightingsInput>
    create: XOR<AreaCreateWithoutStreetLightingsInput, AreaUncheckedCreateWithoutStreetLightingsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutStreetLightingsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutStreetLightingsInput, AreaUncheckedUpdateWithoutStreetLightingsInput>
  }

  export type AreaUpdateWithoutStreetLightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaUncheckedUpdateWithoutStreetLightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadFunctionUpsertWithoutStreetLightingsInput = {
    update: XOR<RoadFunctionUpdateWithoutStreetLightingsInput, RoadFunctionUncheckedUpdateWithoutStreetLightingsInput>
    create: XOR<RoadFunctionCreateWithoutStreetLightingsInput, RoadFunctionUncheckedCreateWithoutStreetLightingsInput>
    where?: RoadFunctionWhereInput
  }

  export type RoadFunctionUpdateToOneWithWhereWithoutStreetLightingsInput = {
    where?: RoadFunctionWhereInput
    data: XOR<RoadFunctionUpdateWithoutStreetLightingsInput, RoadFunctionUncheckedUpdateWithoutStreetLightingsInput>
  }

  export type RoadFunctionUpdateWithoutStreetLightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadFunctionUncheckedUpdateWithoutStreetLightingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingCreateWithoutLampInput = {
    name: string
    latitude: number
    longitude: number
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryCreateNestedManyWithoutStreetLightingInput
    area: AreaCreateNestedOneWithoutStreetLightingsInput
    roadFunction: RoadFunctionCreateNestedOneWithoutStreetLightingsInput
  }

  export type StreetLightingUncheckedCreateWithoutLampInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    area_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedCreateNestedManyWithoutStreetLightingInput
  }

  export type StreetLightingCreateOrConnectWithoutLampInput = {
    where: StreetLightingWhereUniqueInput
    create: XOR<StreetLightingCreateWithoutLampInput, StreetLightingUncheckedCreateWithoutLampInput>
  }

  export type StreetLightingUpsertWithoutLampInput = {
    update: XOR<StreetLightingUpdateWithoutLampInput, StreetLightingUncheckedUpdateWithoutLampInput>
    create: XOR<StreetLightingCreateWithoutLampInput, StreetLightingUncheckedCreateWithoutLampInput>
    where?: StreetLightingWhereInput
  }

  export type StreetLightingUpdateToOneWithWhereWithoutLampInput = {
    where?: StreetLightingWhereInput
    data: XOR<StreetLightingUpdateWithoutLampInput, StreetLightingUncheckedUpdateWithoutLampInput>
  }

  export type StreetLightingUpdateWithoutLampInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUpdateManyWithoutStreetLightingNestedInput
    area?: AreaUpdateOneRequiredWithoutStreetLightingsNestedInput
    roadFunction?: RoadFunctionUpdateOneRequiredWithoutStreetLightingsNestedInput
  }

  export type StreetLightingUncheckedUpdateWithoutLampInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    roadfunction_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingNestedInput
  }

  export type StreetLightingCreateWithoutStreetLightingAccessoryInput = {
    name: string
    latitude: number
    longitude: number
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lamp?: LampCreateNestedManyWithoutStreetLightingInput
    area: AreaCreateNestedOneWithoutStreetLightingsInput
    roadFunction: RoadFunctionCreateNestedOneWithoutStreetLightingsInput
  }

  export type StreetLightingUncheckedCreateWithoutStreetLightingAccessoryInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    area_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lamp?: LampUncheckedCreateNestedManyWithoutStreetLightingInput
  }

  export type StreetLightingCreateOrConnectWithoutStreetLightingAccessoryInput = {
    where: StreetLightingWhereUniqueInput
    create: XOR<StreetLightingCreateWithoutStreetLightingAccessoryInput, StreetLightingUncheckedCreateWithoutStreetLightingAccessoryInput>
  }

  export type StreetLightingUpsertWithoutStreetLightingAccessoryInput = {
    update: XOR<StreetLightingUpdateWithoutStreetLightingAccessoryInput, StreetLightingUncheckedUpdateWithoutStreetLightingAccessoryInput>
    create: XOR<StreetLightingCreateWithoutStreetLightingAccessoryInput, StreetLightingUncheckedCreateWithoutStreetLightingAccessoryInput>
    where?: StreetLightingWhereInput
  }

  export type StreetLightingUpdateToOneWithWhereWithoutStreetLightingAccessoryInput = {
    where?: StreetLightingWhereInput
    data: XOR<StreetLightingUpdateWithoutStreetLightingAccessoryInput, StreetLightingUncheckedUpdateWithoutStreetLightingAccessoryInput>
  }

  export type StreetLightingUpdateWithoutStreetLightingAccessoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lamp?: LampUpdateManyWithoutStreetLightingNestedInput
    area?: AreaUpdateOneRequiredWithoutStreetLightingsNestedInput
    roadFunction?: RoadFunctionUpdateOneRequiredWithoutStreetLightingsNestedInput
  }

  export type StreetLightingUncheckedUpdateWithoutStreetLightingAccessoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    roadfunction_id?: StringFieldUpdateOperationsInput | string
    area_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lamp?: LampUncheckedUpdateManyWithoutStreetLightingNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingCreateManyAreaInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    roadfunction_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingUpdateWithoutAreaInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUpdateManyWithoutStreetLightingNestedInput
    lamp?: LampUpdateManyWithoutStreetLightingNestedInput
    roadFunction?: RoadFunctionUpdateOneRequiredWithoutStreetLightingsNestedInput
  }

  export type StreetLightingUncheckedUpdateWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    roadfunction_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingNestedInput
    lamp?: LampUncheckedUpdateManyWithoutStreetLightingNestedInput
  }

  export type StreetLightingUncheckedUpdateManyWithoutAreaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    roadfunction_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingCreateManyRoadFunctionInput = {
    id?: number
    name: string
    latitude: number
    longitude: number
    area_id: string
    group?: string | null
    poleType?: string | null
    poleHeight?: string | null
    poleMaterial?: string | null
    status: $Enums.StreetLightingStatus
    location: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingUpdateWithoutRoadFunctionInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUpdateManyWithoutStreetLightingNestedInput
    lamp?: LampUpdateManyWithoutStreetLightingNestedInput
    area?: AreaUpdateOneRequiredWithoutStreetLightingsNestedInput
  }

  export type StreetLightingUncheckedUpdateWithoutRoadFunctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    area_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    streetLightingAccessory?: StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingNestedInput
    lamp?: LampUncheckedUpdateManyWithoutStreetLightingNestedInput
  }

  export type StreetLightingUncheckedUpdateManyWithoutRoadFunctionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    area_id?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    poleType?: NullableStringFieldUpdateOperationsInput | string | null
    poleHeight?: NullableStringFieldUpdateOperationsInput | string | null
    poleMaterial?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStreetLightingStatusFieldUpdateOperationsInput | $Enums.StreetLightingStatus
    location?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingAccessoryCreateManyStreetLightingInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LampCreateManyStreetLightingInput = {
    id?: number
    brand: string
    type: string
    power: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StreetLightingAccessoryUpdateWithoutStreetLightingInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingAccessoryUncheckedUpdateWithoutStreetLightingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreetLightingAccessoryUncheckedUpdateManyWithoutStreetLightingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampUpdateWithoutStreetLightingInput = {
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampUncheckedUpdateWithoutStreetLightingInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LampUncheckedUpdateManyWithoutStreetLightingInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}