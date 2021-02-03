import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TutangaLoginComponent } from '../tutanga-login/tutanga-login.component';

@Component({
  selector: 'app-tutanga-navbar',
  templateUrl: './tutanga-navbar.component.html',
  styleUrls: ['./tutanga-navbar.component.scss']
})
export class TutangaNavbarComponent implements OnInit {

  constructor( private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  public openLoginModal(): void {
    let modal = this.modalService.open(TutangaLoginComponent);
    modal.result.then(this.handleModalTodoFormClose.bind(this), this.handleModalTodoFormClose.bind(this));
  }

  private handleModalTodoFormClose(): void {
    //alert('se ha cerrado el modal');
  }

}
