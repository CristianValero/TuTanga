import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutanga-contact',
  templateUrl: './tutanga-contact.component.html',
  styleUrls: ['./tutanga-contact.component.scss']
})
export class TutangaContactComponent implements OnInit {

  private form: FormGroup;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public sendContactRequest(): void {
    let name = this.form.controls["name"].value;
    let email = this.form.controls["email"].value;
    let message = this.form.controls["message"].value;
  }

  public getForm(): FormGroup {
    return this.form;
  }

}
