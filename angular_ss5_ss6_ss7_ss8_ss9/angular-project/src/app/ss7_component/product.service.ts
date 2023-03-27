import { Injectable } from '@angular/core';
import {Product} from "./model/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product : Product[] = [{
    id : 1, name : 'Iphone 12', price : 10000000, descriptions : 'New'
  },
    {
      id : 2, name : 'Iphone 13', price : 25000000, descriptions : 'New'
    }];

  constructor() {
  }

  getAll() {
    return this.product;
  }

  addNewProduct(product){
    this.product.push(product);
  }

  findById(value : number){
    return this.product.filter(product => product.id === value)[0];
  }

  update(value : Product){
    let i : number;
    for(i = 0; i < this.product.length; i++){
      if(this.product[i].id == value.id){
        this.product[i].id = value.id;
        this.product[i].name = value.name;
        this.product[i].price = value.price;
        this.product[i].descriptions = value.descriptions;
      }
    }
  }

  delete(value : number){
    const newProducts = this.product.filter(product => product.id !== value);
    console.log(newProducts);
    this.product = newProducts;
  }
}
