import { Module } from '@nestjs/common';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Material, MaterialSchema } from './schema/material.schema';

@Module({
  imports:[
    AuthModule,
    MongooseModule.forFeature([{ name: Material.name, schema: MaterialSchema }])
  ],
  providers: [MaterialService],
  controllers: [MaterialController]
})
export class MaterialModule {}
