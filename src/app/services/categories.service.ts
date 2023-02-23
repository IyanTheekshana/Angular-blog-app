import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private afs: Firestore) {}

  loadData() {
    let $categories = collection(this.afs, 'categories');
    return collectionData($categories, { idField: 'id' }) as Observable<
      ICategory[]
    >;
  }
}
