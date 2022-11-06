import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import * as admin from 'firebase-admin';

@Injectable()
export class UserService {
  constructor() {}

  public async updateUser(user: User): Promise<admin.firestore.WriteResult> {
    return await admin.firestore().collection('users').doc(user.id).set(user);
  }
}
