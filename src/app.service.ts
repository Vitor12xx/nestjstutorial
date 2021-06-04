import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name: string = 'World'): string {
    return `<h1>Hello ${name}!</h1>`;
  }
}
