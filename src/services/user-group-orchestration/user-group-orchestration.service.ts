import { Injectable, Scope } from '@nestjs/common';
import { Group } from 'src/models/group';
import { GroupService } from '../groups/group.service';
import { UserService } from '../users/user.service';

@Injectable({ scope: Scope.REQUEST })
export class UserGroupOrchestrationService {
  constructor(private userService: UserService, private groupService: GroupService) {}

  async createGroupWithUser(group: Group) {
    const users = group.users;
    const groupRef = await this.groupService.createGroup(group);
    const userPromises = users.forEach((user) => {
      user.groups.push(groupRef.id);
      this.userService.updateUser(user);
    });

    return await Promise.all([userPromises]);
  }
}
