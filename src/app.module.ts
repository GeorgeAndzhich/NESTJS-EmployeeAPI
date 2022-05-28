import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EmployeeModule} from './Employees/employee.module'
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [EmployeeModule,
    MongooseModule.forRoot('mongodb+srv://georgeandjic:BelgorodBerane99@employeecluster.vomou.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
