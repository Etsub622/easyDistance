import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema ({timestamps:true})
export class User{

    @Prop()
    FirstName:string;

    @Prop()
    LastName:string;

    @Prop()
    College:string;

    @Prop()
    Password:string;

    @Prop()
    Email:string;
}

export const UserSchema = SchemaFactory.createForClass(User);

