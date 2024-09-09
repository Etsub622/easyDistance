import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    Password:string;
   
    @IsNotEmpty()
    @IsEmail({},{message:'Invalid email'})
    Email:string
}