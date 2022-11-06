import { Injectable } from '@nestjs/common';
import { Group, GroupSchema } from 'src/models/group';
import * as admin from 'firebase-admin';

@Injectable()
export class GroupService {
  constructor() {}

  public async createGroup(group: Group): Promise<admin.firestore.DocumentReference<admin.firestore.DocumentData>> {
    return await admin.firestore().collection('groups').add(group);
  }

  public async getGroup(id: string): Promise<Group> {
    const result = await admin.firestore().collection('groups').doc(id).get();
    if (GroupSchema.safeParse(result.data()).success) {
      const group = GroupSchema.parse(result.data());
      return group;
    }

    throw new Error('Group not found');
  }
}
