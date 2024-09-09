import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    async signup(@Body() signupDto:SignUpDto):Promise<{token:string}>{
        return this.authService.signup(signupDto);

    }

    @Post('/login')
    async login(@Body() loginDto:LoginDto):Promise<{token:string}>{
        return this.authService.login(loginDto);
    }
    
}
