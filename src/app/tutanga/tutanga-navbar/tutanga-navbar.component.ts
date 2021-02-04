import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TutangaLoginComponent } from '../modals/tutanga-login/tutanga-login.component';

import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tutanga-navbar',
  templateUrl: './tutanga-navbar.component.html',
  styleUrls: ['./tutanga-navbar.component.scss']
})
export class TutangaNavbarComponent implements OnInit {

  private logged: boolean;
  private email: string;

  constructor( private modalService: NgbModal, private authService: AuthService, private afAuth: AngularFireAuth ) { 
    this.logged = false;
    this.email = null;
  }

  ngOnInit(): void {
    this.afAuth.user.subscribe(user => {
      if ( user ) {
        this.logged = true;
        this.email = user.email;
      } else {
        this.logged = false;
        this.email = null;
      }
    });
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

  public getEmail(): string {
    return this.email;
  }

}
