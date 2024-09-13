import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Announcement } from './schema/announcement.schema';
import mongoose from 'mongoose';
import { AnnouncementDto } from './dto/announcement.dto';
import { UpdateAnnouncementDto } from './dto/updateAnnouncement.dto';

@Injectable()
export class AnnouncementService {
    constructor(
        @InjectModel(Announcement.name)
        private readonly announcementModel:mongoose.Model<Announcement>
    ){}

    async getAllAnnouncements():Promise<Announcement[]>{
        return this.announcementModel.find().exec();

    }

    async getAnnouncementById(id:string):Promise<Announcement>{
        return this.announcementModel.findById(id).exec();
    }



    async createAnnouncement(announcementDto:AnnouncementDto):Promise<Announcement>{
        try{
            const announcement = await this.announcementModel.create(announcementDto);
            return announcement.save();

        }catch(e){
            throw new InternalServerErrorException(e);
        }         
}


async updateAnnouncement(id:string,announcementDto:UpdateAnnouncementDto):Promise<Announcement>{
    return await this.announcementModel.findByIdAndUpdate(id,announcementDto,{new:true,runValidators:true}).exec();
}


async deleteAnnouncement(id:string):Promise<void>{
    await this.announcementModel.findByIdAndDelete(id).exec();
}}

