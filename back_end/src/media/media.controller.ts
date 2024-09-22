// media.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaDto } from './dto/media.dto';
import { Media } from './schema/media.schema';


@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  async uploadMedia(@Body() mediaDto: MediaDto): Promise<Media> {
    return this.mediaService.saveMedia(mediaDto);
  }
}
