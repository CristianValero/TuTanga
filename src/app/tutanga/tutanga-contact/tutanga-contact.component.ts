import { Component, OnInit, Provider } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TutangaSuccessComponent } from '../modals/tutanga-success/tutanga-success.component';

import { Contact } from '../interfaces/contact';

import { ProviderService } from '../services/provider/provider.service';
import { DatabaseService } from '../services/database/database.service'

@Component({
  selector: 'app-tutanga-contact',
  templateUrl: './tutanga-contact.component.html',
  styleUrls: ['./tutanga-contact.component.scss']
})
export class TutangaContactComponent implements OnInit {

  private form: FormGroup;
  private sended: boolean;

  constructor( private modalService: NgbModal, private formBuilder: FormBuilder, private database: DatabaseService, private provider: ProviderService ) {
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
      this.provider.setSuccessMessage("Se ha enviado tu solicitud. En menos de 24 horas recibirás una respuesta.");
      this.modalService.open(TutangaSuccessComponent);
      this.form.reset();
    });
  }

  public isSended(): boolean {
    return this.sended;
  }

  public getForm(): FormGroup {
    return this.form;
  }

}
