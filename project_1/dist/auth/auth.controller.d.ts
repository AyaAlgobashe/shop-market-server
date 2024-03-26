import { AuthService } from './auth.service';
import { User } from './schemas/user.schema';
import { SingUpDto } from './dtos/sign-up.dto';
import { SingInDto } from './dtos/sign-in.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SingUpDto): Promise<User>;
    signIn(signInDto: SingInDto): Promise<{
        token: string;
    }>;
}
