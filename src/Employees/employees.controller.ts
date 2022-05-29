import {Controller, Get,Post,Delete,Put, Body, Param} from '@nestjs/common'
import {EmployeeService} from './employees.service';
import {Employee} from './schemas/employee.schema';
import {CreateEmployeeDto} from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

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
        deleteEmployee(@Param(':id') id: string) {
            return this.employeeService.deleteEmployee(id);
            
        }

        @Put(':id')
        updateEmployee(@Param(':id') id:string,@Body()updateEmployeeDto:UpdateEmployeeDto) {
            return this.employeeService.updateEmployee(id, updateEmployeeDto);
        }
    }