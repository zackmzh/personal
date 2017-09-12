import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GetMockService } from './service/get-mock.service';
import { AddToChartService } from './service/add-to-chart.service';
import { CatalogBrowsingComponent } from './catalog-browsing/catalog-browsing.component';
import { ProductBrowsingComponent } from './product-browsing/product-browsing.component';
import { router } from './app.routes';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';





@NgModule({
  declarations: [
    AppComponent,
    CatalogBrowsingComponent,
    ProductBrowsingComponent,
    ShoppingCartComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    router,
  ],
  providers: [GetMockService,AddToChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
