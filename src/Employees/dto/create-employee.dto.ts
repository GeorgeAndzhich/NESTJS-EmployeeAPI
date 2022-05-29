import { ApiProperty } from "@nestjs/swagger";

export class CreateEmployeeDto{
    @ApiProperty({description: "Name of the Employee"})
    name: string;
    @ApiProperty({description: "Work Email"})
    email: string;
    @ApiProperty({description: "Work phone number"})
    phone: string;
    @ApiProperty({description: "Home adress of the employee"})
    homeAdress: string;
    @ApiProperty({description: "When the employee singed the sontract"})
    employmentDate:string;
    @ApiProperty({description: "Employee's birthday"})
    birthday: string;
}