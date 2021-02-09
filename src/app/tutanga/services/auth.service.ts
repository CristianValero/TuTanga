import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: boolean;
  private email: string;

  constructor( public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, public ngZone: NgZone ) {
    this.logged = false;
    this.afAuth.user.subscribe(user => {
      if ( user ) {
        this.logged = true;
        this.email = user.email;
        //this.router.navigate(["/"]);
      } else {
        this.logged = false;
        this.email = null;
      }
    });
   }

   public createUser(email: string, password: string): Promise<String> {
     return new Promise((resolve, reject) => {
       this.afAuth.createUserWithEmailAndPassword(email, password).then(result => {
        result.user.sendEmailVerification();
        resolve("OK");
       }).catch(error => {
         reject(error.message);
       });
     });
   }

   public logIn(email: string, password:string): Promise<String> {
     return new Promise((resolve, reject) => {
       this.afAuth.signInWithEmailAndPassword(email, password).then((res) => {
        resolve("OK");
       }).catch((error) => {
        reject(error.message);
       });
     });
   }

   public getEmail(): string {
     return this.email;
   }

   public isLogged(): any {
     return this.logged;
   }

   public signOut(): void {
    this.afAuth.signOut();
  }
}
