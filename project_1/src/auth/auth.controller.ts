import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { User } from './schemas/user.schema';

import { SingUpDto } from './dtos/sign-up.dto';
import { SingInDto } from './dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    
    @Post('signup')
    async signUp(@Body() signUpDto:SingUpDto):Promise <User>{
        return this.authService.signUp(signUpDto);
    }

    @Post('signin')
    async signIn(@Body() signInDto:SingInDto):Promise <{token:string}>{
        return this.authService.signIn(signInDto);
    }
}
