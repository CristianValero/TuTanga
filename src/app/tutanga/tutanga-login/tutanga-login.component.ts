import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tutanga-login',
  templateUrl: './tutanga-login.component.html',
  styleUrls: ['./tutanga-login.component.scss']
})
export class TutangaLoginComponent implements OnInit {

  private todoForm: FormGroup;

  constructor( private formBuilder: FormBuilder, public activeModal: NgbActiveModal ) { }

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      email: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }

  public loginAttempt(): void {
  }

  public getTodoForm(): FormGroup {
    return this.todoForm;
  }

}
