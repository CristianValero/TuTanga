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

@NgModule({
  declarations: [
    AppComponent,
    TutangaNavbarComponent,
    TutangaFooterComponent,
    TutangaNotfoundComponent,
    TutangaProductosComponent,
    TutangaContactComponent,
    TutangaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TutangaLoginComponent]
})
export class AppModule { }
