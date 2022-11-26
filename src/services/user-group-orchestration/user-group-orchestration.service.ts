import { Injectable, Scope } from '@nestjs/common';
import { Group } from 'src/models/group';
import { GroupService } from '../groups/group.service';
import { UserService } from '../users/user.service';

@Injectable({ scope: Scope.REQUEST })
export class UserGroupOrchestrationService {
  constructor(private userService: UserService, private groupService: GroupService) {}

  async createGroupWithUser(group: Group): Promise<string> {
    const { userIds } = group;
    const groupRef = await this.groupService.createGroup(group);

    const users = await this.userService.getUsers(userIds);
    const userPromises = users.map((user) => {
      user.groups.push(groupRef.id);
      this.userService.updateUser(user);
    });

    await Promise.all([userPromises]);
    // TODO: Why is this not returning a string.....
    return JSON.stringify(groupRef.id);
  }
}
