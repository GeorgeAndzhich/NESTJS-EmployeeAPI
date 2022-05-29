import {Controller, Get,Post,Delete,Patch, Body} from '@nestjs/common'
import {EmployeeService} from './employees.service';
import {Employee} from './schemas/employee.schema';
import {CreateEmployeeDto} from './dto/create-employee.dto';

@Controller('employees')
    export class EmployeeController{
        constructor(private readonly employeeService: EmployeeService){}
     
        @Get()
        getEmployees() {
            return this.employeeService.getEmployees();
        }

        @Post()
        insertEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
            return this.employeeService.insertEmployee(createEmployeeDto);
        }

        @Delete(':id')
        deleteEmployee(id:string) {
            return this.employeeService.deleteEmployee(id);
            
        }

        @Patch(':id')
        updateEmployee(id:string, employee:Employee) {

        }
    }