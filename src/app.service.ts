import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { firestore } from 'firebase-admin';

@Injectable()
export class AppService {
  private readonly db: firestore.Firestore;

  constructor() {
    // this.db = admin.firestore();
  }

  async getHello() {
    return 'hello';
    // const groupRef = this.db.collection('Groups').doc('9F34J3byex4l7ZSCixgH');
    // const group = await groupRef.get();
    // if (group.exists) {
    //   return group.data();
    // }
  }
}
