import { Injectable } from '@angular/core';
import {
  collection,
  Firestore,
  where,
  query,
  collectionData,
  CollectionReference,
  orderBy,
  doc,
  docData,
  limit,
  setDoc,
  increment,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private afs: Firestore) {}

  loadFeatured() {
    return collectionData<IPost>(
      query<IPost>(
        collection(this.afs, 'posts') as CollectionReference<IPost>,
        where('isFeatured', '==', true),
        limit(4)
      ),
      { idField: 'id' }
    ) as Observable<IPost[]>;
  }

  loadLatest() {
    return collectionData<IPost>(
      query<IPost>(
        collection(this.afs, 'posts') as CollectionReference<IPost>,
        orderBy('createdAt')
      ),
      { idField: 'id' }
    ) as Observable<IPost[]>;
  }

  loadCategoryPost(categoryId: any) {
    return collectionData<IPost>(
      query<IPost>(
        collection(this.afs, 'posts') as CollectionReference<IPost>,
        where('category.categoryId', '==', categoryId.id)
      ),
      { idField: 'id' }
    ) as Observable<IPost[]>;
  }

  loadSinglePost(id: any) {
    let $posts = doc(this.afs, `posts`, id);
    return docData($posts, { idField: 'id' }) as Observable<IPost[]>;
  }

  loadSimilarCatePost(categoryId: any) {
    return collectionData<IPost>(
      query<IPost>(
        collection(this.afs, 'posts') as CollectionReference<IPost>,
        where('category.categoryId', '==', categoryId),
        limit(3)
      ),
      { idField: 'id' }
    ) as Observable<IPost[]>;
  }

  countViews(postId: any) {
    const viewCount = {
      views: increment(1),
    };
    let $posts = doc(this.afs, `posts`, postId);
    return updateDoc($posts, viewCount);
  }
}
