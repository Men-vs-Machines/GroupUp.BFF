import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/models/user';
import { UserService } from 'src/services/users/user.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.userService.getUser(id);
  }

  @Delete()
  async deleteAllUsers(): Promise<void> {
    return await this.userService.deleteAllUsers();
  }

  @Post()
  async createUser(@Body() user: User): Promise<void> {
    // TODO: Fix this it doesnt work
    console.log('createUser', user);
    return await this.userService.createUser(user);
  }

  @Put()
  async updateUser(@Body() user: User): Promise<FirebaseFirestore.WriteResult> {
    return await this.userService.updateUser(user);
  }
}
