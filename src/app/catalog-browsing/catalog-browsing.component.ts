import { Component, OnInit } from '@angular/core';
import { GetMockService } from "./../service/get-mock.service";
import {ProductModel} from "./../mock_product/mock_product.model";
import { Router } from '@angular/router';
import { OrderProductModel } from './../mock_product/order_product.model';
import {AddToChartService} from "../service/add-to-chart.service";

@Component({
  selector: 'app-catalog-browsing',
  templateUrl: './catalog-browsing.component.html',
  styleUrls: ['./catalog-browsing.component.css']
})
export class CatalogBrowsingComponent implements OnInit {

  products : ProductModel[];
  selectedProduct : ProductModel
  orderedProducts: OrderProductModel[];



  constructor(
    private getMock : GetMockService,
    private router:Router,
    private addToChart: AddToChartService
){}

  ngOnInit(){
    this.getMock.getData().then((data)=>this.products=data);
    this.orderedProducts = this.addToChart.getCartProducts();
  }


  showDetails(product:ProductModel):void{
    //selected product id to pass to next page
    this.selectedProduct = product;

    this.router.navigate(['/product',this.selectedProduct.id]);
  }
}
