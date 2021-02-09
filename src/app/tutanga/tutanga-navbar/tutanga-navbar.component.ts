import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TutangaLoginComponent } from '../modals/tutanga-login/tutanga-login.component';
import { TutangaCartComponent } from '../tutanga-cart/tutanga-cart.component';

import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tutanga-navbar',
  templateUrl: './tutanga-navbar.component.html',
  styleUrls: ['./tutanga-navbar.component.scss']
})
export class TutangaNavbarComponent implements OnInit {

  private cartAmount: number;
  private logged: boolean;

  constructor( private modalService: NgbModal, public authService: AuthService, private database: DatabaseService ) {
    this.cartAmount = 0;
    this.logged = false;

    this.authService.isLogged().subscribe(value => {
      if ( value ) {
        this.logged = true;
        this.database.getProductsInCart().subscribe(response => {
          response.docs.forEach(value => {
            this.cartAmount += 1;
          });
        });
      } else {
        this.logged = false;
      }
    });
  }

  ngOnInit(): void { }

  public getCartAmount(): number {
    return this.cartAmount;
  }

  public openLoginModal(): void {
    this.modalService.open(TutangaLoginComponent);
    //modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
  }

  public closeSession() {
    this.authService.signOut();
  }

  private handleModalTodoFormClose(): void {
    //alert('se ha cerrado el modal');
  }

  public isLogged(): boolean {
    return this.logged;
  }

}
