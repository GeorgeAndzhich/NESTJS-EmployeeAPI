import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose from "mongoose";
import {Model} from "mongoose";
import {Employee} from './employee.model';

@Injectable()
export class EmployeeService
{
    constructor(@InjectModel('Employee')private employeeModel: Model<Employee>){}

    async insertEmployee(employee: Employee){
        const newEmployee = new this.employeeModel(employee);
        const result = await newEmployee.save();
        return newEmployee;
    }

    async getEmployees() {
       const employees = await this.employeeModel.find().exec();
       return employees as Employee[];
    }

    async deleteEmployee(id: string) {
        await this.employeeModel.deleteOne({id:id}).exec();
    }

    async updateEmployee(id: string, employee: Employee) {
        
    }
}