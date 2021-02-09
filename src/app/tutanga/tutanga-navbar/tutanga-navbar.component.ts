import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TutangaLoginComponent } from '../modals/tutanga-login/tutanga-login.component';
import { TutangaCartComponent } from '../tutanga-cart/tutanga-cart.component';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tutanga-navbar',
  templateUrl: './tutanga-navbar.component.html',
  styleUrls: ['./tutanga-navbar.component.scss']
})
export class TutangaNavbarComponent implements OnInit {

  constructor( private modalService: NgbModal, public authService: AuthService ) { }

  ngOnInit(): void { }

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

}
