import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './schema/message.schema';

@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }])

  ],
  providers: [MessageService],
  controllers: [MessageController]
})
export class MessageModule {}
