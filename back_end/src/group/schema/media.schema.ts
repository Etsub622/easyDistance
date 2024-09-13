import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class Media extends Document{

    @Prop({required: true})
    mediaUrl:string;

    @Prop({required: true})
    mediaType:string;

    @Prop({required: true})
    fileSize:number;
}
export const MediaSchema =SchemaFactory.createForClass(Media);