import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tutanga-cart',
  templateUrl: './tutanga-cart.component.html',
  styleUrls: ['./tutanga-cart.component.scss']
})
export class TutangaCartComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
    if ( !this.authService.isLogged() ) {
      this.router.navigate(["/"]);
    }
  }

}
