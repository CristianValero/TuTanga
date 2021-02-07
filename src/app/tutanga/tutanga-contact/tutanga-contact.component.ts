import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { Contact } from '../services/contact';
import { DatabaseService } from '../services/database.service'

@Component({
  selector: 'app-tutanga-contact',
  templateUrl: './tutanga-contact.component.html',
  styleUrls: ['./tutanga-contact.component.scss']
})
export class TutangaContactComponent implements OnInit {

  private form: FormGroup;
  private sended: boolean;

  constructor( private formBuilder: FormBuilder, private database: DatabaseService ) {
    this.sended = false; 
  }

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

    let contact: Contact = { name, email, message };
    this.database.saveContactAppeal(contact).then(resolve => {
      this.form.reset();
      this.sended = true;
    });
  }

  public isSended(): boolean {
    return this.sended;
  }

  public getForm(): FormGroup {
    return this.form;
  }

}
