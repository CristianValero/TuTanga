import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProviderService } from '../../services/provider/provider.service';

@Component({
  selector: 'app-tutanga-success',
  templateUrl: './tutanga-success.component.html',
  styleUrls: ['./tutanga-success.component.scss']
})
export class TutangaSuccessComponent implements OnInit {

  private successMessage: string;

  constructor( public activeModal: NgbActiveModal, private provider: ProviderService ) {
    this.successMessage = "";
    
    this.provider.getSuccessMessage().subscribe(message => {
      this.successMessage = message;
    });
  }

  ngOnInit(): void {
  }

  public getSuccessMessage(): string {
    return this.successMessage;
  }

}
