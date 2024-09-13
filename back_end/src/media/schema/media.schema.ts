import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MediaDocument = Media & Document;

@Schema()
export class Media {
  @Prop({ required: true })
  mediaUrl: string; 
}

export const MediaSchema = SchemaFactory.createForClass(Media);
