import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from "class-validator";

export class GroupDto {
    @IsNotEmpty()
    @IsString()
    groupName: string;

    @IsNotEmpty()
    @IsString()
    imageUrl: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    createrId: string; 
}