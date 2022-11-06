import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/models/user';
import { UserService } from 'src/services/users/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }
}
