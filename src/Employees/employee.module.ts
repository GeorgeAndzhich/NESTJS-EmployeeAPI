import {Module} from '@nestjs/common';
import {EmployeeController} from './employees.controller';
import {EmployeeService} from './employees.service';
import {MongooseModule} from '@nestjs/mongoose';
import { EmployeeDocument, Employee } from './schemas/employee.schema';

@Module({
    imports: [MongooseModule.forFeature([{name:Employee.name,schema:EmployeeDocument}])],
    controllers: [EmployeeController],
    providers: [EmployeeService]
})
export class EmployeeModule {}