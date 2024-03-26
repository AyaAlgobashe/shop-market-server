import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { SingUpDto } from './dtos/sign-up.dto';
import { SingInDto } from './dtos/sign-in.dto';


@Injectable()
export class AuthService {

    constructor(@InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService) {}

    async signUp(signUpDto:SingUpDto):Promise<User>{
        console.log(signUpDto);
        const {name, email, password} = signUpDto;
        const hashedPassword = await bcrypt.hash(password,10);
        return this.userModel.create({name,email,password: hashedPassword})
    }

    async signIn(signInDto: SingInDto):Promise<{token:string}>{
        const {email, password} = signInDto;
        const user = await this.userModel.findOne({email})
        console.log(user);
        if(!user){
            throw new UnauthorizedException('Invalid email or password');
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if(!isPasswordMatched){
            throw new UnauthorizedException('Invalid email or password');
        }
        const token = this.jwtService.sign({email})
        console.log(token);
        return {token}
    }

}
