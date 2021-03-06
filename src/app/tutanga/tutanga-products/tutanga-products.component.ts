import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TutangaLoginComponent } from '../modals/tutanga-login/tutanga-login.component';
import { TutangaSuccessComponent } from '../modals/tutanga-success/tutanga-success.component';
import { TutangaDiscountComponent } from '../modals/tutanga-discount/tutanga-discount.component';

import { DatabaseService } from '../services/database/database.service';
import { AuthService } from '../services/auth/auth.service';
import { ProviderService } from '../services/provider/provider.service';

import { Product } from '../interfaces/product';

@Component({
  selector: 'app-tutanga-products',
  templateUrl: './tutanga-products.component.html',
  styleUrls: ['./tutanga-products.component.scss']
})
export class TutangaProductsComponent implements OnInit {

  private products: Array<Product>;
  private randomProduct: Product;

  private ready: boolean;
  private logged: boolean;

  constructor( private modalService: NgbModal, private database: DatabaseService, private auth: AuthService, private provider: ProviderService ) { 
    this.products = [];
    this.ready = false;
    this.logged = false;

    this.auth.isLogged().subscribe(value => {
      this.logged = value;
    });

    this.modalService.open(TutangaDiscountComponent);
  }

  ngOnInit(): void {
    this.database.getProducts().subscribe(response => {
      this.products = [];
      response.docs.forEach(value => {
        let data = value.data();
        let product: Product = {
          id: value.id,
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
    if ( this.logged ) {
      this.database.saveProductCart(product).then(resolve => {
        console.log("Product added to the cart correctly!");

        this.provider.setSuccessMessage("Tu producto se ha añadido al carrito correctamente.");
        this.modalService.open(TutangaSuccessComponent);
      }).catch(error => {
        console.log(error);
      });
    } else {
      this.modalService.open(TutangaLoginComponent);
    }
  }

}
