import { Injectable } from '@nestjs/common';
import { Group } from 'src/models/group';
import * as admin from 'firebase-admin';

@Injectable()
export class GroupService {
  constructor() {}

  public async createGroup(group: Group): Promise<admin.firestore.DocumentReference<admin.firestore.DocumentData>> {
    return await admin.firestore().collection('groups').add(group);
  }
}
