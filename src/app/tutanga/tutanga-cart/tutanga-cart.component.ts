import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Product } from '../interfaces/product';

import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tutanga-cart',
  templateUrl: './tutanga-cart.component.html',
  styleUrls: ['./tutanga-cart.component.scss']
})
export class TutangaCartComponent implements OnInit {

  private products: Array<Product>;

  constructor( private router: Router, private authService: AuthService, private database: DatabaseService ) {
    this.products = [];
    if ( this.authService.isLogged() ) {
      this.database.getProductsInCart().subscribe(response => {
        response.docs.forEach(value => {
          let data = value.data();
          let product: Product = {
            name: data.name,
            description: data.description,
            image: data.img,
            price: data.price
          };
          this.products.push(product);
          console.log(product.name);
        });
      });
    }
  }

  ngOnInit(): void {
    if ( !this.authService.isLogged() ) {
      this.router.navigate(["/"]);
    }
  }

  public deleteFromCart(product: Product) {

  }

  public getProducts(): Array<Product> {
    return this.products;
  }

  public getCartLength(): Number {
    return this.products.length;
  }

}
