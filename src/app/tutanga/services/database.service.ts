import { Injectable, NgZone } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( public database: AngularFirestore, public router: Router, public ngZone: NgZone ) { }

  public getProducts(): Observable<firebase.default.firestore.QuerySnapshot> {
    return this.database.collection<Product>('products', ref => ref.orderBy('name', 'desc')).get();
  }
}
