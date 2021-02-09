import { Injectable, NgZone } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../interfaces/product';
import { Contact } from '../interfaces/contact';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private amountCartElements: BehaviorSubject<number>;

  constructor( private database: AngularFirestore, private auth: AuthService ) {
    this.amountCartElements = new BehaviorSubject<number>(0);
  }

  public getProducts(): Observable<firebase.default.firestore.QuerySnapshot> {
    return this.database.collection<Product>('products', ref => ref.orderBy('name', 'desc')).get();
  }

  public getProductsInCart(): Observable<firebase.default.firestore.QuerySnapshot> {
    return this.database.collection<Product>(this.auth.getEmail()).get();
  }

  public getAmountProductsInCart(): Observable<number> {
    return this.amountCartElements;
  }

  public setAmountProductsInCart(value: number): void {
    this.amountCartElements.next(value);
  }

  public saveContactAppeal(contact: Contact): Promise<DocumentReference> {
    return this.database.collection('appeals').add(contact);
  }

  public saveProductCart(product: Product): Promise<DocumentReference> {
    let actualAmount:number = this.amountCartElements.value;
    actualAmount += 1;
    this.amountCartElements.next(actualAmount);
    return this.database.collection(this.auth.getEmail()).add(product);
  }

  public deleteProductFromCart(product: Product): Promise<void> {
    let actualAmount:number = this.amountCartElements.value;
    actualAmount -= 1;
    this.amountCartElements.next(actualAmount);
    return this.database.collection(this.auth.getEmail()).doc(product.id).delete();
  }
}
