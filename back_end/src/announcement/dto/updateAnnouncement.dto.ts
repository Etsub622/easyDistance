import {IsOptional, IsString } from "class-validator";

export class UpdateAnnouncementDto{
    @IsString()
    @IsOptional()
    title:String;

    @IsString()
    @IsOptional()
    description:String;

    @IsString()
    @IsOptional()
    university:String;

}
