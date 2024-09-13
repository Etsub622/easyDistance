import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MessageDto{
    @IsNotEmpty()
    @IsString()
    senderId: string;

    @IsNotEmpty()
    @IsString()
    groupId: string;

    @IsNotEmpty()
    @IsString()
    text: string;

    @IsOptional()
    @IsString()
    mediaUrl?: string;
}