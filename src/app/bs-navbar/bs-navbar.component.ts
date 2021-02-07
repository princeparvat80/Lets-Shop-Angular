import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../shopping-cart.service';
import { AngularFireAuth, } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  cart$!: Observable<ShoppingCart>;
  
  constructor(public auth: AuthService, private shoppingCartService: ShoppingCartService) {
     
   }
  logout(){
   this.auth.logout();
  }
 
  async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart()

  }

}
