import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupModule } from './group/group.module';
import { MessageModule } from './message/message.module';
import { MediaModule } from './media/media.module';
import { AnnouncementModule } from './announcement/announcement.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    GroupModule,
    MessageModule,
    MediaModule,
    AnnouncementModule],
    
  controllers: [],
  providers: [],
})
export class AppModule {}
