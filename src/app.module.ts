import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EmployeeModule} from './Employees/employee.module'
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/employees'), EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
