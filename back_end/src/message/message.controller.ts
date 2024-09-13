import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { MessageService } from "./message.service";
import { MessageDto } from "./dto/message.dto";


@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('send')
  async sendMessage(@Body() messageDto:MessageDto) {
    return this.messageService.sendMessage(messageDto);
  }

  @Get(':groupId')
  async getMessages(@Param('groupId') groupId: string) {
    return this.messageService.getMessages(groupId);
  }
}
