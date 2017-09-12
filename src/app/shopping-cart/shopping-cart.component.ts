import { Component, OnInit } from '@angular/core';
import { AddToChartService } from "../service/add-to-chart.service";
import { OrderProductModel } from './../mock_product/order_product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  productList:OrderProductModel[];
  total = [];
  totalPrice:number;

  constructor(private addToChart:AddToChartService) { }

  ngOnInit() {
    this.productList = this.addToChart.getCartProducts();
    console.log(this.productList);
    if (this.productList) {
      this.productList.forEach(a => this.total.push(a.price * a.quantity));
      this.totalPrice = this.total.reduce((curr, prev) => curr + prev);
    } else {
      this.totalPrice = 0;
    }
  }

  cancel(product){
    this.totalPrice = this.totalPrice - (product.price * product.quantity);
    this.addToChart.cancelCartProducts(product);
  }

}
