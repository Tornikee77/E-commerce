import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateuserDto {
  //   @IsEmail()
  //   @IsNotEmpty()
  @IsString()
  email: string;

  //   @IsStrongPassword()
  //   @IsNotEmpty()
  @IsString()
  password: string;
}
