import { Injectable, NgZone } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private logged: BehaviorSubject<boolean>;
  private email: string;

  constructor( public afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router ) {
    this.logged = new BehaviorSubject<boolean>(false);

    this.afAuth.user.subscribe(user => {
      if ( user ) {
        this.email = user.email;
        this.logged.next(true);
      } else {
        this.logged.next(false);
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

   public isLogged(): Observable<boolean> {
     return this.logged;
   }

   public signOut(): void {
    this.afAuth.signOut();
  }
}
