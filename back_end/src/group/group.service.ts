import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Group } from "./schema/group.schema";
import { User } from "src/auth/schema/auth.schema";
import { Model } from "mongoose";
import { GroupDto } from "./dto/group.dto";


@Injectable()
export class GroupService {
    constructor(
        
        @InjectModel(Group.name) private groupModel: Model<Group>,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}
 async createGroup(groupDto: GroupDto, createrId: string): Promise<Group> {
        const newGroup = new this.groupModel({
            ...groupDto,
            members: [groupDto.createrId]
        });
        return newGroup.save();
    }


async addMember(groupId: string, userId: string): Promise<Group> {
    return this.groupModel.findByIdAndUpdate(groupId, { $push: { members: userId } }, { new: true });
  }


  async removeMember(groupId: string, userId: string): Promise<Group> {
    return this.groupModel.findByIdAndUpdate(groupId, { $pull: { members: userId } }, { new: true });
  }

  async getGroup(groupId: string): Promise<Group> {
    return this.groupModel.findById(groupId).populate('members');
  }


}
