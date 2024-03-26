import {  IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto {


    @IsNumber()
    @IsNotEmpty()
    readonly orderCount:number;
    @IsString()
    @IsNotEmpty()
    readonly orderName:string;
    @IsNotEmpty()
    @IsString()
    readonly userId:string;

    

}