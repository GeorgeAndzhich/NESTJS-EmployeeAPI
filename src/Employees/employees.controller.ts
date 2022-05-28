import {Controller, Get,Post,Delete,Put} from '@nestjs/common'
import {EmployeeService} from './employees.service';
import {Employee} from './employee.model';

@Controller('employees')
    export class EmployeeController{
        constructor(private readonly employeeService: EmployeeService){}
     
        @Get()
        getEmployees() {
            return this.employeeService.getEmployees();
        }

        @Post()
        insertEmployee(employee: Employee) {
            return this.employeeService.insertEmployee(employee);
        }

        @Delete(':id')
        deleteEmployee(id:string) {
            return this.employeeService.deleteEmployee(id);
            
        }
    }