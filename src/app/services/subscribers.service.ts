import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ISubs } from '../models/subs';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private afs: Firestore) {}

  addSubs(subData: any) {
    let $subscribers = collection(this.afs, 'subscribers');
    addDoc($subscribers, subData)
      .then((docRef) => {})
      .catch((err) => {
        console.error(err);
      });
  }

  // checkSubs(subEmail: any) {
  //   return collectionData<ISubs>(
  //     query<ISubs>(
  //       collection(this.afs, 'posts') as CollectionReference<ISubs>,
  //       where('subscribers.email', '==', subEmail)
  //     ),
  //     { idField: 'id' }
  //   ) as Observable<ISubs[]>;
  // }
}
