import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Group } from 'src/models/group';
import { GroupService } from 'src/services/groups/group.service';
import { UserGroupOrchestrationService } from './../../services/user-group-orchestration/user-group-orchestration.service';

@Controller('groups')
export class GroupsController {
  constructor(private userGroupService: UserGroupOrchestrationService, private groupService: GroupService) {}

  @Post()
  async createGroup(@Body() group: Group): Promise<string> {
    return JSON.stringify(await this.userGroupService.createGroupWithUser(group));
  }

  @Get(':id')
  async getGroup(@Param('id') id: string): Promise<Group> {
    return await this.groupService.getGroup(id);
  }
}
