import { ShoppingCartService } from './../shopping-cart.service';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';

import { ProductService } from './../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category: string | null | undefined;
  cart : any;
  subscription!: Subscription;
  

  constructor
  (
    productService: ProductService, 
    private shoppingCartService: ShoppingCartService,
    route :ActivatedRoute 
  ) 
    {
      productService.getAll().
      switchMap(products => {
        this.products=products;
        return route.queryParamMap;
      })

        .subscribe(params => {
          this.category = params.get('category');
    
          this.filteredProducts=(this.category) ? 
          this.products.filter(p=> p.category===this.category):
          this.products;
          });

    }

   async ngOnInit(){
       this.subscription= (await this.shoppingCartService.getCart()).
       subscribe(cart => this.cart = cart );
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}


// import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
// import { CategoryService } from './../category.service';

// import { ProductService } from './../product.service';
// import { Component, OnInit } from '@angular/core';
// import { Product } from '../models/product';


// @Component({
//   selector: 'app-products',
//   templateUrl: './products.component.html',
//   styleUrls: ['./products.component.css']
// })
// export class ProductsComponent  {
//   products: Product[] = [];
//   filteredProducts: Product[] = [];
//   categories$;
//   category: string | null | undefined;
  

//   constructor
//   (
//     productService: ProductService, 
//     categoryService: CategoryService,
//     route :ActivatedRoute 
//   ) 
//     {
//       productService.getAll().subscribe(products => {
//         this.products=products;

//         route.queryParamMap.subscribe(params => {
//           this.category = params.get('category');
    
//           this.filteredProducts=(this.category) ? 
//           this.products.filter(p=> p.category===this.category):
//           this.products;
//           });
//       });

//       this.categories$ = categoryService.getAll();

//     }
//   }

