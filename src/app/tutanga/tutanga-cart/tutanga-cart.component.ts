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
  private totalPrice: number;

  constructor( private router: Router, private authService: AuthService, private database: DatabaseService ) {
    this.products = [];
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this.authService.isLogged().subscribe(value => {
      if ( !value ) {
        this.router.navigate(["/"]);
      } else {
        this.refreshCartProducts();
      }
    });
  }

  public deleteFromCart(product: Product) {
    this.database.deleteProductFromCart(product).then(resolve => {
      console.log("nice chanclo!");
      this.refreshCartProducts();
    }).catch(error => {
      console.log(error);
    });
  }

  private refreshCartProducts(): void {
    let auxProducts: Array<Product> = [];
    let price = 0;

    this.database.getProductsInCart().subscribe(response => {
      response.docs.forEach(value => {
        let data = value.data();
        let product: Product = {
          id: value.id,
          name: data.name,
          description: data.description,
          image: data.img,
          price: data.price
        };
        auxProducts.push(product);
        price += parseInt(product.price);
      });
      this.products = auxProducts;
      this.totalPrice = price;
    });
  }

  public getTotalPrice(): Number {
    return this.totalPrice;
  }

  public getProducts(): Array<Product> {
    return this.products;
  }

  public getTotalSize(): number {
    return this.products.length;
  }

}
