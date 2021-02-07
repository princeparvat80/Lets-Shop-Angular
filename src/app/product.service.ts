import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: any){
    return this.db.list('/products').push(product);
  }

  getAll(){
    return this.db.list('/products');
  }
  
  get(productId: any) { 
    return this.db.object('/products/' + productId);
  }

  update(productId: string, product: Object) { 
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string) { 
    return this.db.object('/products/' + productId).remove();
  }

}

