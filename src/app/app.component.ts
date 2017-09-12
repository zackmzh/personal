import { Component, DoCheck } from '@angular/core';
import { OrderProductModel } from './mock_product/order_product.model';
import { AddToChartService } from "./service/add-to-chart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  logIn : boolean = false;
  orderedProduct : OrderProductModel[];
  productNumber : number;

  constructor(private addToChart : AddToChartService){};

  ngDoCheck(){
    this.orderedProduct = this.addToChart.getCartProducts();
    this.productNumber = this.orderedProduct.length;
  }


}
