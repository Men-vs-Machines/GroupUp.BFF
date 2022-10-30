import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AppService {
  constructor() {}

  async getHello() {
    const groupRef = admin
      .firestore()
      .collection('Groups')
      .doc('9F34J3byex4l7ZSCixgH');
    const group = await groupRef.get();
    if (group.exists) {
      return group.data();
    }
  }
}
