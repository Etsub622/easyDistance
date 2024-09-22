import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './schema/group.schema';

@Module({
  imports: [AuthModule,
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }])

  ],
  providers: [GroupService],
  controllers: [GroupController]
})
export class GroupModule {}
