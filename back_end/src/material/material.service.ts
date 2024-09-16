import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Material } from './schema/material.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { MaterialDto } from './dto/create_material.dto';
import { UpdateMaterialDto } from './dto/update_material.dto';

@Injectable()
export class MaterialService {
    constructor(
        @InjectModel(Material.name)
    private readonly materialModel:mongoose.Model<Material>
    ){}


    async createMaterial(materialDto:MaterialDto):Promise<Material>{
        try{
            const material = await this.materialModel.create(materialDto);
            return material.save();

        }catch(e){
            throw new InternalServerErrorException(e);
        }}



    async getAllMaterial():Promise<Material[]>{
        return await  this.materialModel.find().exec()}

    async getMaterialById(id:string):Promise<Material>{
        return await this.materialModel.findById(id).exec();}   
        
        
    async updateMaterial(id:string,updateMaterialDto:UpdateMaterialDto):Promise<Material>{
        return await this.materialModel.findByIdAndUpdate(id,updateMaterialDto,{new:true,runValidators:true}).exec();}
        
    async deleteMaterial(id:string):Promise<void>{
        await this.materialModel.findByIdAndDelete(id).exec();
    }    
    
}
