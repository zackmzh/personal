import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ProductModel } from './../mock_product/mock_product.model';
import { GetMockService } from "../service/get-mock.service";
import { AddToChartService } from '../service/add-to-chart.service';
import { OrderProductModel } from './../mock_product/order_product.model';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-product-browsing',
  templateUrl: './product-browsing.component.html',
  styleUrls: ['./product-browsing.component.css']
})
export class ProductBrowsingComponent implements OnInit{

  // @Output() order  = new EventEmitter<number>();
  orderedNumber: number;
  quantity : number= 1 ;
  selectedProduct :ProductModel;
  orderProduct: OrderProductModel;
  // products:ProductModel[];

  constructor(
    private getMock:GetMockService,
    private route: ActivatedRoute,
    private add:AddToChartService,
    private router:Router
  ) { }


  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.getMock.getProduct(+params.get('id')))
      .subscribe((select:ProductModel) => {
        return this.selectedProduct = select;
      });
  }

  addToChart(){
    this.orderProduct = {
      id: this.selectedProduct.id,
      name: this.selectedProduct.name,
      imgUrl:this.selectedProduct.imgUrl,
      price: this.selectedProduct.price,
      quantity: this.quantity
    };
    this.add.setCartProducts(this.orderProduct);

    this.orderedNumber = this.add.getCartProducts().length;
    // this.order.emit(this.orderedNumber);

    if(confirm('Continue shop?')==true){
      return;
    }else{
      //TODO jump to shopcart
      this.router.navigate(['/cart']);
    }

  }




}
