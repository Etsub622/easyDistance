import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MaterialDto{

    @IsString()
    @IsNotEmpty()
    university:string;

    @IsNumber()
    @IsNotEmpty()
    year:number;

    @IsNumber()
    @IsNotEmpty()
    term:number;

    @IsString()
    @IsNotEmpty()
    materialType:string;

    @IsString()
    @IsNotEmpty()
    material:string;

    @IsString()
    @IsNotEmpty()
    courseName:string;
}
