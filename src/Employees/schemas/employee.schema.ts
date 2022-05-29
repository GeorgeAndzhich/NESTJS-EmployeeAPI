import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type EmployeeDocument = Document & Employee

@Schema()
export class Employee {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    homeAdress: string;

    @Prop(Date)
    employmentDate:string;

    @Prop(Date)
    birthday: string;
}

export const EmployeeDocument= SchemaFactory.createForClass(Employee);