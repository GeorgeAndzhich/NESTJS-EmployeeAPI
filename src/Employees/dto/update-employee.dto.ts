import { ApiProperty } from "@nestjs/swagger";

export class UpdateEmployeeDto{
    @ApiProperty({description: "Work Email"})
    email: string;
    @ApiProperty({description: "Work phone number"})
    phone: string;
    @ApiProperty({description: "Home adress of the employee"})
    homeAdress: string;
}