import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DB_HOST || 'mysql-db',
      port: parseInt(process.env.MYSQL_DB_PORT, 10) || 3306,
      username: process.env.MYSQL_DB_USER || 'student',
      password: process.env.MYSQL_DB_PASSWORD || 'student',
      database: process.env.MYSQL_DB_DATABASE || 'rdv',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
