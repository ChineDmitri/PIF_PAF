import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { User } from '../entities/user.entity';
import { CreateUserRequestDto } from '../dto/req/create-user.req.dto';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepository = {
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user entity', () => {
    const user = new User('Axel', 'Gallic');
    expect(user).toBeInstanceOf(User);
    expect(user.firstName).toEqual('Axel');
    expect(user.lastName).toEqual('Gallic');
  });

  it('should save a user to the database', async () => {
    const user = new User('John', 'Doe');
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
    };

    const dto = plainToClass(CreateUserRequestDto, validData);

    await service.createUser(dto);

    expect(mockRepository.save).toHaveBeenCalledWith(user);
  });
});
