import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutangaProductsComponent } from './tutanga/tutanga-products/tutanga-products.component';
import { TutangaNotfoundComponent } from './tutanga/tutanga-notfound/tutanga-notfound.component';
import { TutangaContactComponent } from './tutanga/tutanga-contact/tutanga-contact.component';

const routes: Routes = [
  { path: '', component: TutangaProductsComponent },
  { path: 'productos', component: TutangaProductsComponent },
  { path: 'contacto', component: TutangaContactComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: TutangaNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
