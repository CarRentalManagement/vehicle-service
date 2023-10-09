import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { IConfig } from 'config';

import { CONFIG } from '@microservice-user/module-config/config.provider';

import { ConfigModule } from '@microservice-user/module-config/config.module';
import { UserModule } from '@microservice-user/module-user/user.module';

import { JwtStrategy } from './guard/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    ConfigModule,
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [CONFIG],
      useFactory: async (configService: IConfig) => ({
        secret: configService.get('auth.jwt_secret'),
        signOptions: {
          expiresIn: `${configService.get('auth.jwt_expiration_time')}s`,
        },
      }),
    }),
  ],
  providers: [JwtStrategy],
  controllers: [],
})
export class AuthModule {}
