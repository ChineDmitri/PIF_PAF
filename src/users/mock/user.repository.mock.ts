import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

export const userRepositoryMock = {
  save: jest.fn(),
} as unknown as Repository<User>;
