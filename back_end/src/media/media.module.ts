import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MulterModule } from '@nestjs/platform-express';
import { Media, MediaSchema } from './schema/media.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: Media.name, schema: MediaSchema }])

  ],
  providers: [MediaService],
  controllers: [MediaController]
})
export class MediaModule {}
