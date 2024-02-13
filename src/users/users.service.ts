import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRequestDto } from '../dto/req/create-user.req.dto';
import { CreateUserResponseDto } from '../dto/res/create-user.res.dto';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    try {
      const newUser: User = new User(user.firstName, user.lastName);

      await this.usersRepository.save(newUser);
      this.logger.log(
        `User created: ${newUser.id} - ${newUser.firstName} ${newUser.lastName}`,
      );
      const responseDto: CreateUserResponseDto = {
        message: 'User created successfully',
      };

      return responseDto;
    } catch (error) {
      throw new HttpException(
        { message: 'Failed to create user' },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
