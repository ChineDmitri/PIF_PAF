import { IsString } from 'class-validator';

export class CreateUserRequestDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;
}
