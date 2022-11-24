import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/models/user';
import * as admin from 'firebase-admin';
import { UserSchema } from './../../models/user';

@Injectable()
export class UserService {
  constructor() {}

  public async updateUser(user: User): Promise<admin.firestore.WriteResult> {
    return await admin.firestore().collection('users').doc(user.id).set(user);
  }

  public async getUser(id: string): Promise<User> {
    const result = await admin.firestore().collection('users').doc(id).get();

    if (!result.exists) {
      throw new NotFoundException('User not found');
    }

    if (!UserSchema.safeParse(result.data()).success) {
      throw new HttpException('User not found', 403);
    }

    return UserSchema.parse(result.data());
  }

  public async createUser(user: User): Promise<void> {
    await admin.firestore().collection('users').doc(user.id).set(user);
  }

  public async getUsers(userIds: string[]): Promise<User[]> {
    const userPromises = userIds.map((userId) => this.getUser(userId));
    return await Promise.all(userPromises);
  }

  public async deleteAllUsers(): Promise<void> {
    const userIds = await this.getAllUserIds();
    await Promise.all(userIds.map((userId) => admin.firestore().collection('users').doc(userId).delete()));
    await admin.auth().deleteUsers(userIds);
  }

  private getAllUserIds(): string[] | PromiseLike<string[]> {
    return admin
      .auth()
      .listUsers()
      .then((listUsersResult) => {
        return listUsersResult.users.map((userRecord) => {
          return userRecord.uid;
        });
      });
  }
}
