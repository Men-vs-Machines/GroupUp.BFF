import { Body, Controller, Post } from '@nestjs/common';
import { Group } from 'src/models/group';
import { UserGroupOrchestrationService } from './../../services/user-group-orchestration/user-group-orchestration.service';

@Controller('groups')
export class GroupsController {
  constructor(private userGroupService: UserGroupOrchestrationService) {}

  @Post()
  async createGroup(@Body() group: Group) {
    return this.userGroupService.createGroupWithUser(group);
  }
}
