import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TutangaNavbarComponent } from './tutanga/tutanga-navbar/tutanga-navbar.component';
import { TutangaFooterComponent } from './tutanga/tutanga-footer/tutanga-footer.component';
import { TutangaNotfoundComponent } from './tutanga/tutanga-notfound/tutanga-notfound.component';
import { TutangaProductosComponent } from './tutanga/tutanga-productos/tutanga-productos.component';
import { TutangaContactComponent } from './tutanga/tutanga-contact/tutanga-contact.component';
import { TutangaLoginComponent } from './tutanga/tutanga-login/tutanga-login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from './tutanga/services/auth.service';
import { TutangaRegisterComponent } from './tutanga/tutanga-register/tutanga-register.component';

//SOY PAT

@NgModule({
  declarations: [
    AppComponent,
    TutangaNavbarComponent,
    TutangaFooterComponent,
    TutangaNotfoundComponent,
    TutangaProductosComponent,
    TutangaContactComponent,
    TutangaLoginComponent,
    TutangaRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [TutangaLoginComponent]
})
export class AppModule { }
