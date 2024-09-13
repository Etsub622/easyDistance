import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Announcement{

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