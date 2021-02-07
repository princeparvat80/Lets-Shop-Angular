import { Product } from './product';

export class ShoppingCartItem{
  title: any;
  imageUrl: any;
  price: any;

    constructor (public product: Product, public quantity: number){}
    
    get totalPrice() {
        return this.product.price * this.quantity ;
    }
}