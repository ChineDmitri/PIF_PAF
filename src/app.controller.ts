import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log(process.env.MYSQL_DB_PORT_PROD);
    console.log('x');
    return this.appService.getHello();
  }
}
