import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): any {
    return [{  "id": 1, "task": "Give dog a bath", "complete": true }, { "id": 2, "task": "Do laundry", "complete": true }, { "id": 3, "task": "Vacuum floor", "complete": false },{ "id": 4, "task": "Feed cat", "complete": true },{ "id": 5, "task": "Change light bulbs", "complete": false }, { "id": 6, "task": "Go to Store", "complete": true }];
  }
}
