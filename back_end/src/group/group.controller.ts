import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { GroupService } from "./group.service";
import { GroupDto } from "./dto/group.dto";


@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post('create')
  async createGroup(@Body() groupDto:GroupDto) {
    return this.groupService.createGroup(groupDto, groupDto.createrId);
  }

  @Post(':groupId/add-member')
  async addMember(@Param('groupId') groupId: string, @Body('userId') userId: string) {
    return this.groupService.addMember(groupId, userId);
  }

  @Post(':groupId/remove-member')
  async removeMember(@Param('groupId') groupId: string, @Body('userId') userId: string) {
    return this.groupService.removeMember(groupId, userId);
  }

  @Get(':groupId')
    async getGroup(@Param('groupId') groupId: string) {
        return this.groupService.getGroup(groupId);
    }
}
