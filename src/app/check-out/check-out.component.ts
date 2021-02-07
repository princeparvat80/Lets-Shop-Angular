import { OrderService } from './../order.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  shipping = {}; 
  cart!: ShoppingCart;
  cartsubscription!: Subscription;
  userId!: string;
  userSubscription!: Subscription;

  constructor(
    private router: Router,
    private shoppingCartService:ShoppingCartService, 
    private orderService: OrderService,
    private authservice : AuthService
    ){
  }

  async ngOnInit(){
   let cart$= await this.shoppingCartService.getCart();
   this.cartsubscription= cart$.subscribe(cart => this.cart = cart);
   this.userSubscription= this.authservice.user$.subscribe(user => this.userId = user.uid);
  }
  
  ngOnDestroy(){
    this.cartsubscription.unsubscribe();
    this.userSubscription.unsubscribe();
   } 
  
  async placeOrder() {
   let order = new Order(this.userId, this.shipping, this.cart);
   let result= await this.orderService.placeOrder(order);
   this.router.navigate(['/order-success',result.key]);
  } 
}
 
