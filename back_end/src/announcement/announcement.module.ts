import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Announcement, AnnouncementSchema } from './schema/announcement.schema';

@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: Announcement.name, schema: AnnouncementSchema }])

  ],
  providers: [AnnouncementService],
  controllers: [AnnouncementController]
})
export class AnnouncementModule {}
