import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document } from "mongoose";

@Schema()

export class Material extends Document{
    @Prop()
    university:string;

    @Prop()
    year:number;

    @Prop()
    term:number;

    @Prop()
    materialType:string;

    @Prop()
    material:string;

    @Prop()
    courseName:string;

    
}
export const MaterialSchema = SchemaFactory.createForClass(Material);