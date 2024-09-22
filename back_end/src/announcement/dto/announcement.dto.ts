import {IsNotEmpty, IsString } from "class-validator";

export class AnnouncementDto{
    @IsString()
    @IsNotEmpty()
    title:String;

    @IsString()
    @IsNotEmpty()
    description:String;

    @IsString()
    @IsNotEmpty()
    university:String;

}