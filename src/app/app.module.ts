import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TutangaNavbarComponent } from './tutanga/tutanga-navbar/tutanga-navbar.component';
import { TutangaFooterComponent } from './tutanga/tutanga-footer/tutanga-footer.component';
import { TutangaNotfoundComponent } from './tutanga/tutanga-notfound/tutanga-notfound.component';
import { TutangaProductosComponent } from './tutanga/tutanga-productos/tutanga-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    TutangaNavbarComponent,
    TutangaFooterComponent,
    TutangaNotfoundComponent,
    TutangaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
