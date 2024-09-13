import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Message } from "./schema/message.schema";
import { Model } from "mongoose";
import { ObjectId } from 'mongodb';
import { MessageDto } from "./dto/message.dto";


@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async sendMessage(messageDto: MessageDto): Promise<Message> {
    const senderObjectId = new ObjectId(messageDto.senderId); 
    const groupObjectId = new ObjectId(messageDto.groupId);

    const newMessage = new this.messageModel({
      sender: senderObjectId,
      group: groupObjectId,
      text: messageDto.text,
      mediaUrl: messageDto.mediaUrl,
    });

    return newMessage.save();
  }

  async getMessages(groupId: string): Promise<Message[]> {
    const groupObjectId = new ObjectId(groupId);
    return this.messageModel.find({ group: groupObjectId }).populate('sender').exec();
  }
}
