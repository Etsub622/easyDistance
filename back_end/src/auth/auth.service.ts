import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from 'bcryptjs';
import { User } from './schema/auth.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel:mongoose.Model<User>,
        private jwtService:JwtService
    ){}
    async signup(signUpDto: SignUpDto): Promise<{ token: string }> {
        const { FirstName, lastName, College, Password, Email } = signUpDto;
      
       
      
        const hashedPassword = await bcrypt.hash(Password, 10);
      
        const user = await this.userModel.create({
          FirstName,
          Email,
          lastName,
          College,
          Password: hashedPassword,
        });
      
        const token = this.jwtService.sign({ id: user.id });
        console.log(user);
        return { token };
      }
      


    async login(loginDto:LoginDto):Promise<{token:string}>{
        const {Email,Password} = loginDto;
        const user = await this.userModel.findOne({Email});
        if(!user){
            throw new Error('Invalid Credentials');
        }
        const isPasswordValid = await bcrypt.compare(Password,user.Password);
        if(!isPasswordValid){
            throw new Error('Invalid Credentials');
        }
        const token = this.jwtService.sign({id:user.id});
        return {token};
    }

}