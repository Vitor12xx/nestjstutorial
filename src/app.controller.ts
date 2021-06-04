import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('controller')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['/main', '/main/:id'])
  getHello(@Param() params): string {
    console.log('params', params);
    return this.appService.getHello(params.id);
  }
}
