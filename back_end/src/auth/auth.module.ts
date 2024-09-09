import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { JwtModule } from '@nestjs/jwt/dist/jwt.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './schema/auth.schema';

@Module({

  imports :[
    PassportModule.register({
      defaultStrategy: 'jwt',}),
JwtModule.registerAsync({
  inject:[ConfigService],
    useFactory:(config:ConfigService)=>({
      secret:config.get<string>('JWT_SECRET'),
      signOptions:{
        expiresIn: config.get<string | number>('JWT_EXPIRE'),}
    })
 }),

    MongooseModule.forFeature([{name:User.name,schema:UserSchema}])
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
