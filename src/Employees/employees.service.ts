import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Employee, EmployeeDocument} from "./schemas/employee.schema"
import { CreateEmployeeDto } from "./dto/create-employee.dto";

@Injectable()
export class EmployeeService
{
    constructor(@InjectModel(Employee.name)private employeeModel: Model<EmployeeDocument>){}

    async insertEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee>{
       const newEmployee = new this.employeeModel(createEmployeeDto);
       return newEmployee.save();
    }

    async getEmployees(): Promise<Employee[]> {
       return this.employeeModel.find().exec();
    }

    async deleteEmployee(id: string) {
        await this.employeeModel.deleteOne({id:id}).exec();
    }

    async updateEmployee(id: string, employee: Employee) {

    }
}