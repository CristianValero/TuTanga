import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-tutanga-register',
  templateUrl: './tutanga-register.component.html',
  styleUrls: ['./tutanga-register.component.scss']
})
export class TutangaRegisterComponent implements OnInit {

  private form: FormGroup;
  private dataValid: boolean;

  constructor( private formBuilder: FormBuilder, public activeModal: NgbActiveModal, private authService: AuthService ) {
    this.dataValid = true;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      passwd: ['', Validators.required],
      passwd2: ['', Validators.required]
    });
  }

  public registerAttempt(): void {
    let email = this.form.controls["email"].value;
    let passwd = this.form.controls["passwd"].value;
    let passwd2 = this.form.controls["passwd2"].value;

    if ( passwd === passwd2 ) {
      this.authService.createUser(email, passwd).then(resolve => {
        this.activeModal.close();
      }).catch(error => {
        this.dataValid = false;
        console.log(error);
      });
    } else {
      this.dataValid = false;
    }
  }

  public isDataValid(): boolean {
    return this.dataValid;
  }

  public getForm(): FormGroup {
    return this.form;
  }

}
