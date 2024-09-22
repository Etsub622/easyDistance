import {IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateMaterialDto{

    @IsString()
    @IsOptional()
    university:string;

    @IsNumber()
    @IsOptional()
    year:number;

    @IsNumber()
    @IsOptional()
    term:number;

    @IsString()
    @IsOptional()
    materialType:string;

    @IsString()
    @IsOptional()
    courseName:string;


    @IsString()
    @IsOptional()
    material:string;
}