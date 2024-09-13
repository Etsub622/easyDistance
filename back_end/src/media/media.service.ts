import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Media, MediaDocument } from './schema/media.schema';
import { MediaDto } from './dto/media.dto';

@Injectable()
export class MediaService {
  constructor(@InjectModel(Media.name) private mediaModel: Model<MediaDocument>) {}

  async saveMedia(mediaDto: MediaDto): Promise<Media> {
    const media = new this.mediaModel(mediaDto);
    return media.save();
  }
}
