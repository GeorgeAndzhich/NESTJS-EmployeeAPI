import {Module} from '@nestjs/common';
import {EmployeeController} from './employees.controller';
import {EmployeeService} from './employees.service';
import {MongooseModule} from '@nestjs/mongoose';
import { EmployeeSchema } from './employee.model';

@Module({
    imports: [MongooseModule.forFeature([{name:'Employee',schema:EmployeeSchema}])],
    controllers: [EmployeeController],
    providers: [EmployeeService]
})
export class EmployeeModule {}