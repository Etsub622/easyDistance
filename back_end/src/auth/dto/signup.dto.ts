import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDto {

    @IsNotEmpty()
    @IsString()
    FirstName:string;

    @IsNotEmpty()
    @IsString()
    lastName:string;

    @IsNotEmpty()
    @IsString()
    College:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    Password:string;
   
    @IsNotEmpty()
    @IsEmail({},{message:'Invalid email'})
    Email:string
}