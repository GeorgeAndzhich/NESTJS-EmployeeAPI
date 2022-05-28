import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema({
   name: {type: 'string', required: true,nullable: false},
   email: {type: 'string',required: true,nullable:false},
   phone: {type: 'string',required: true,nullable:false},
   homeAdress: {type: 'string',required: true,nullable:false},
   employmentDate: {type: Date,required: true,nullable:false},
   birthdayDate: {type: Date,required: true,nullable:false}

});

export interface Employee {
       name: string,
       email: string,
       phone: string,
       homeAdress: string,
       employmentDate: Date,
       birthdayDate: Date
}