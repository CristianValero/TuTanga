import { Injectable, NgZone } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { Product } from '../interfaces/product';
import { Contact } from '../interfaces/contact';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private database: AngularFirestore, private auth: AuthService ) { }

  public getProducts(): Observable<firebase.default.firestore.QuerySnapshot> {
    return this.database.collection<Product>('products', ref => ref.orderBy('name', 'desc')).get();
  }

  public getProductsInCart(): Observable<firebase.default.firestore.QuerySnapshot> {
    return this.database.collection<Product>(this.auth.getEmail()).get();
  }

  public saveContactAppeal(contact: Contact): Promise<DocumentReference> {
    return this.database.collection('appeals').add(contact);
  }

  public saveProductCart(product: Product): Promise<DocumentReference> {
    let email = this.auth.getEmail();
    return this.database.collection(email).add(product);
  }
}
