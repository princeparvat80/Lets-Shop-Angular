import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';
import { CategoryService } from './category.service';
import { UserService } from './user.service';
import { AuthGaurdService } from './auth-gaurd.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from'@angular/forms';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';


import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

import { CustomFormsModule } from 'ng2-validation';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component'


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    AdminOrdersComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:ProductsComponent },
      {path: 'login', component:LoginComponent },
      {path: 'products', component: ProductsComponent },
      {path: 'shopping-cart', component:ShoppingCartComponent },

      {path: 'check-out', component: CheckOutComponent, canActivate:[AuthGaurdService]},
      {path: 'order-success/:id', component:OrderSuccessComponent, canActivate:[AuthGaurdService] },
      {path: "my/order", component:MyOrderComponent, canActivate:[AuthGaurdService]},
      
      // AdminAuthGuardService call this Service for Admin Authorization only

      { 
        path: 'admin/products/new', 
        component: ProductFormComponent, 
        canActivate: [AuthGaurdService, AdminAuthGuardService,] 
      },
      { 
        path: 'admin/products/:id', 
        component: ProductFormComponent, 
        canActivate: [AuthGaurdService,AdminAuthGuardService,] 
      },
      { 
        path: 'admin/products', 
        component: AdminProductsComponent, 
        canActivate: [AuthGaurdService,AdminAuthGuardService,] 
      },
      { 
        path: 'admin/orders', 
        component: AdminOrdersComponent, 
        canActivate: [AuthGaurdService, AdminAuthGuardService, ] 
      }
    
    ]),
    NgbModule
  ],
  providers: [
    AuthService,
    AuthGaurdService,
    AdminAuthGuardService,
    UserService,
    CategoryService,
    ShoppingCartService,
    OrderService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
