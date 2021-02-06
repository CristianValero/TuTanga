import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../services/auth.service';

import { TutangaRegisterComponent } from '../tutanga-register/tutanga-register.component';

@Component({
  selector: 'app-tutanga-login',
  templateUrl: './tutanga-login.component.html',
  styleUrls: ['./tutanga-login.component.scss']
})
export class TutangaLoginComponent implements OnInit {

  private todoForm: FormGroup;
  private dataValid: boolean;

  constructor( private modalService: NgbModal, private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private authService: AuthService ) {
    this.dataValid = true;
  }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      email: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  public loginAttempt(): void {
    let email = this.todoForm.controls["email"].value;
    let passwd = this.todoForm.controls["passwd"].value;

    this.authService.logIn(email, passwd).then((message) => {
      this.activeModal.close();
    }).catch((errMsg) => {
      console.log(errMsg);
      this.dataValid = false;
    });
  }

  public openRegisterModal(): void {
    this.activeModal.close();
    this.modalService.open(TutangaRegisterComponent);
  }

  public getTodoForm(): FormGroup {
    return this.todoForm;
  }

  public isDataValid(): boolean {
    return this.dataValid;
  }

}
