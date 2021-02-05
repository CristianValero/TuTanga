import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TutangaNavbarComponent } from './tutanga/tutanga-navbar/tutanga-navbar.component';
import { TutangaFooterComponent } from './tutanga/tutanga-footer/tutanga-footer.component';
import { TutangaNotfoundComponent } from './tutanga/tutanga-notfound/tutanga-notfound.component';
import { TutangaProductsComponent } from './tutanga/tutanga-products/tutanga-products.component';
import { TutangaContactComponent } from './tutanga/tutanga-contact/tutanga-contact.component';
import { TutangaLoginComponent } from './tutanga/modals/tutanga-login/tutanga-login.component';
import { TutangaRegisterComponent } from './tutanga/modals/tutanga-register/tutanga-register.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthService } from './tutanga/services/auth.service';
import { DatabaseService } from './tutanga/services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    TutangaNavbarComponent,
    TutangaFooterComponent,
    TutangaNotfoundComponent,
    TutangaProductsComponent,
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
  providers: [AuthService, DatabaseService],
  bootstrap: [AppComponent],
  entryComponents: [TutangaLoginComponent]
})
export class AppModule { }
