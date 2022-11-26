import { Injectable } from '@nestjs/common';
import { Group, GroupSchema } from 'src/models/group';
import * as admin from 'firebase-admin';

@Injectable()
export class GroupService {
  public async createGroup(group: Group): Promise<admin.firestore.DocumentReference<admin.firestore.DocumentData>> {
    const groupRef = await admin.firestore().collection('groups').add(group);
    await groupRef.set({ id: groupRef.id }, { merge: true });
    return groupRef;
  }

  public async getGroup(id: string): Promise<Group> {
    const result = await admin.firestore().collection('groups').doc(id).get();
    if (GroupSchema.safeParse(result.data()).success) {
      const group = GroupSchema.parse(result.data());
      return group;
    }

    throw new Error('Group not found');
  }

  public async updateGroup(group: Group): Promise<admin.firestore.WriteResult> {
    return await admin.firestore().collection('groups').doc(group.id).set(group, { merge: true });
  }
}
