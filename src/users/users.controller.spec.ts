import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { plainToClass } from 'class-transformer';
import { CreateUserRequestDto } from '../dto/req/create-user.req.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { CreateUserResponseDto } from 'dto/res/create-user.res.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let userService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.MYSQL_DB_HOST_PROD || 'mysql-db',
          port: parseInt(process.env.MYSQL_DB_PORT_PROD, 10) || 3306,
          username: process.env.MYSQL_DB_USER_PROD || 'student',
          password: process.env.MYSQL_DB_PASSWORD_PROD || 'student',
          database: process.env.MYSQL_DB_DATABASE_PROD || 'rdv',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    userService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
    };

    const dto: CreateUserRequestDto = plainToClass(
      CreateUserRequestDto,
      validData,
    );

    const expectedResult: CreateUserResponseDto = {
      message: 'User created successfully',
    };

    jest
      .spyOn(userService, 'createUser')
      .mockImplementation(async () => expectedResult);

    const result = await controller.createUser(dto);

    // nous avons appelé méthode createUser ?
    expect(userService.createUser).toHaveBeenCalledWith(dto);

    // résultat attendu ? => "message": "User created successfully"
    expect(result).toEqual(expectedResult);
  });
});
