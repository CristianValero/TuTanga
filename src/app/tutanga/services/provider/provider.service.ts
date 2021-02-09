import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private succesMessage: BehaviorSubject<string>;

  constructor() {
    this.succesMessage = new BehaviorSubject<string>("");
  }

  public getSuccessMessage(): Observable<string> {
    return this.succesMessage;
  }

  public setSuccessMessage(message: string): void {
    this.succesMessage.next(message);
  }
}
