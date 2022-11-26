import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Group } from 'src/models/group';
import { GroupService } from 'src/services/groups/group.service';
import { UserGroupOrchestrationService } from './../../services/user-group-orchestration/user-group-orchestration.service';

@Controller('groups')
export class GroupsController {
  constructor(private userGroupService: UserGroupOrchestrationService, private groupService: GroupService) {}

  @Post()
  async createGroup(@Body() group: Group): Promise<string> {
    return await this.userGroupService.createGroupWithUser(group);
  }

  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<Group> {
    return await this.groupService.getGroup(id);
  }

  @Put()
  async updateGroup(@Body() group: Group) {
    return await this.groupService.updateGroup(group);
  }
}
