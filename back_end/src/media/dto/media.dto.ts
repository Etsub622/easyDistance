import { IsString, IsNotEmpty } from 'class-validator';

export class MediaDto {
  @IsString()
  @IsNotEmpty()
  mediaUrl: string;
}
