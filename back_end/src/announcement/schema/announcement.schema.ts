import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types,Document } from "mongoose";

@Schema()
export class Announcement extends Document{

    @Prop()
    title: string;

    @Prop()
    descritption: string;

    @Prop()
    university: string;

    @Prop({default:Date.now})
    CreatedAt:Date;
}
export const AnnouncementSchema = SchemaFactory.createForClass(Announcement);