import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementDto } from './dto/announcement.dto';
import { Announcement } from './schema/announcement.schema';
import { UpdateAnnouncementDto } from './dto/updateAnnouncement.dto';

@Controller('announcement')
export class AnnouncementController {
    constructor(private announcementService:AnnouncementService){}

    @Post('create')
    async createAnnouncement(@Body() announcementDto:AnnouncementDto):Promise<Announcement>{
        return this.announcementService.createAnnouncement(announcementDto);
    }

    @Get()
    async getAllAnnouncements():Promise<Announcement[]>{
        return this.announcementService.getAllAnnouncements();
    }

    @Get(':id')
    async getAnnouncementById(@Param('id') id:string):Promise<Announcement>{
        return this.announcementService.getAnnouncementById(id);
    }

    @Put(':id')
    async updateAnnouncement(@Param('id') id:string,@Body() announcementDto:UpdateAnnouncementDto):Promise<Announcement>{
        return this.announcementService.updateAnnouncement(id,announcementDto);
    }

    @Delete(':id')

    async deleteAnnouncement(@Param('id') id:string):Promise<void>{
        return this.announcementService.deleteAnnouncement(id);
    }
}
