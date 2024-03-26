import { IsEmail, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';

export class SingInDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
