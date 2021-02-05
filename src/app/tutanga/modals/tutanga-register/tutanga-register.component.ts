import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tutanga-register',
  templateUrl: './tutanga-register.component.html',
  styleUrls: ['./tutanga-register.component.scss']
})
export class TutangaRegisterComponent implements OnInit {

  private form: FormGroup;

  constructor( private formBuilder: FormBuilder, public activeModal: NgbActiveModal ) { }

  ngOnInit(): void {
  }

  public getForm(): FormGroup {
    return this.form;
  }

}
