import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Group extends Document {
  @Prop({ required: true })
  groupName: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  members: Types.ObjectId[];

  @Prop()
  imageUrl:string;

  @Prop()
  description:string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);


