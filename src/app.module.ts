import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GroupsController } from './controllers/groups/groups.controller';
import { UsersController } from './controllers/users/users.controller';
import { GroupService } from './services/groups/group.service';
import { UserGroupOrchestrationService } from './services/user-group-orchestration/user-group-orchestration.service';
import { UserService } from './services/users/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env.production'],
    }),
  ],
  controllers: [GroupsController, UsersController],
  providers: [UserService, GroupService, UserGroupOrchestrationService],
})
export class AppModule {}
