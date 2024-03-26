import { InjectModel } from "@nestjs/mongoose"
import { PassportStrategy } from "@nestjs/passport"
import { Model } from "mongoose"
import { User } from "./schemas/user.schema"
import {Strategy, ExtractJwt} from 'passport-jwt'
import { UnauthorizedException } from "@nestjs/common"


export class JWTStrategy extends PassportStrategy(Strategy){
    constructor(@InjectModel(User.name) private userModel: Model<User>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'defaultSecret',
          });
    }
    async validate(payload){
        const {email} = payload;
        const user = await this.userModel.findOne({email})
        if(!user){
            throw new UnauthorizedException('Login failed')
        }
        return user;
    }
}