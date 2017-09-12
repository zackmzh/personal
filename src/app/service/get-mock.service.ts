import { Injectable } from '@angular/core';
import { ProductModel } from './../mock_product/mock_product.model';
import { Products } from './../mock_product/mock_product';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';


@Injectable()
export class GetMockService {

  getData():Promise<ProductModel[]>{
    //retrieve data includes id,name and img url from mock file

    return Promise.resolve(Products);
  }

  getProduct(id:number): Promise<ProductModel>{
    return this.getData()
      .then(products =>products.find(prod=>prod.id === id));
  }

}
