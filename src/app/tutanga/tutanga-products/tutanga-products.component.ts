import { Component, OnInit } from '@angular/core';

import { DatabaseService } from '../services/database.service';
import { Product } from '../services/product';

@Component({
  selector: 'app-tutanga-products',
  templateUrl: './tutanga-products.component.html',
  styleUrls: ['./tutanga-products.component.scss']
})
export class TutangaProductsComponent implements OnInit {

  private products: Array<Product>;
  private randomProduct: Product;
  private ready: boolean;

  constructor( private database: DatabaseService ) { 
    this.products = [];
    this.ready = false;
  }

  ngOnInit(): void {
    this.database.getProducts().subscribe(response => {
      this.products = [];
      response.docs.forEach(value => {
        let data = value.data();
        let product: Product = {
          name: data.name,
          description: data.description,
          image: data.img,
          price: data.price
        };
        this.products.push(product);
      });
      this.randomProduct = this.products[Math.floor(Math.random() * this.products.length)];
      this.ready = true;
    });
  }

  public isReady(): boolean {
    return this.ready;
  }

  public getProducts(): Array<Product> {
    return this.products;
  }

  public getRandomProduct(): Product {
    return this.randomProduct;
  }

  public addToCart(product: Product): void {
    console.log(product.name);
  }

}
