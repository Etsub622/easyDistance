import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import {Types,Document } from "mongoose";


@Schema()
export class Message extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  sender: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Group', required: true })
  group: Types.ObjectId;

  @Prop()
  text: string;

  @Prop()
  mediaUrl?: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
