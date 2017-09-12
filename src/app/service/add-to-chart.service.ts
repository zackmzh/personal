import { Injectable } from '@angular/core';
import { OrderProductModel } from './../mock_product/order_product.model';

@Injectable()
export class AddToChartService {

  orderedProduct=[];


  constructor() { }

  setCartProducts(product:OrderProductModel):void{
    this.orderedProduct.push(product);
  }

  getCartProducts(){
    return this.orderedProduct;
  }

  cancelCartProducts(product:OrderProductModel){
    let index = this.orderedProduct.indexOf(product);
    this.orderedProduct.splice(index,1);
  }

}
