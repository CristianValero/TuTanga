import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userData: any;

  constructor( public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone ) {
    this.afAuth.user.subscribe(user => {
      if ( user ) {
        this.userData = user;
        this.router.navigate(["/"]);
      } else {
        this.userData = null;
      }
    });
   }

   public createUser(email: string, password: string): void {
     this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
        result.user.sendEmailVerification().then(() => {
          console.log('User registered OK.');
        });
     });
   }

   public isLogged(): any {
     return this.userData;
   }

   public signOut(): void {
    this.afAuth.signOut().then(() => {
      console.log('User logout OK.');
    });
  }
}
