/**
 * Created by ricomai on 8/30/17.
 */

import { CatalogBrowsingComponent } from './catalog-browsing/catalog-browsing.component';
import { ProductBrowsingComponent } from './product-browsing/product-browsing.component';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoute : Routes = [
  {
    path:'product/:id',
    component :ProductBrowsingComponent
  },
  {
    path:'catalog',
    component:CatalogBrowsingComponent
  },
  {
    path:'',
    redirectTo:'/catalog',
    pathMatch:'full'
  },
  {
    path:'cart',
    component:ShoppingCartComponent
  }
];

export const router = RouterModule.forRoot(appRoute);

