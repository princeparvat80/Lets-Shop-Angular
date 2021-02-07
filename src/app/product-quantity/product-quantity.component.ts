import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {

  @Input('product') product!: Product;

  @Input ('shopping-cart') shoppingCart: any;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product : Product){
    this.cartService.addToCart(product);
  }

  // removeFromCart(){
  //   this.cartService.removeFromCart(this.product);
  // }
  



}
