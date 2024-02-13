import { Test, TestingModule } from '@nestjs/testing';
import { ValidationError, validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CreateUserRequestDto } from './create-user.req.dto';

describe('CreateUserRequestDto', () => {
  it('should not have validation errors with valid data', async () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
    };

    const dto = plainToClass(CreateUserRequestDto, validData);

    const errors: ValidationError[] = await validate(dto);

    expect(errors).toHaveLength(0);
  });

  it('should have validation error if firstName is not a string', async () => {
    const invalidData = {
      firstName: 123, // Quand c'est pas string
      lastName: 'Doe',
    };

    const dto = plainToClass(CreateUserRequestDto, invalidData);

    const errors: ValidationError[] = await validate(dto);

    expect(errors).toHaveLength(1);
    expect(errors[0].constraints).toHaveProperty('isString');
  });

  it('should have validation error if lastName is not a string', async () => {
    const invalidData = {
      firstName: 'John',
      lastName: 123, // Quand c'est pas string
    };

    const dto = plainToClass(CreateUserRequestDto, invalidData);

    const errors: ValidationError[] = await validate(dto);

    expect(errors).toHaveLength(1);
    expect(errors[0].constraints).toHaveProperty('isString');
  });
});
