import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialDto } from './dto/create_material.dto';
import { Material } from './schema/material.schema';
import { UpdateMaterialDto } from './dto/update_material.dto';

@Controller('material')
export class MaterialController {
    constructor(private materialService:MaterialService){}

    @Post('create')
    async createMaterial(@Body() materialDto:MaterialDto):Promise<Material>{
        return this.materialService.createMaterial(materialDto);
    }

    @Get(':id')
    async getMaterialById(@Param('id') id:string):Promise<Material>{
        return this.materialService.getMaterialById(id);
    }


    @Get()
    async getAllMaterial():Promise<Material[]>{
        return this.materialService.getAllMaterial();
    }

    @Put(':id')
    async updateMaterial(@Param('id') id:string, @Body() updateMaterialDto:UpdateMaterialDto):Promise<Material>{
        return this.materialService.updateMaterial(id,updateMaterialDto);
    }

    @Delete(':id')
    async deleteMaterial(@Param('id') id:string):Promise<void>{
        return this.materialService.deleteMaterial(id);
    }

}
