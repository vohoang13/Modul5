import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product : Product[]=[];

  constructor(private productService : ProductService) {
    this.product = this.productService.getAll();
  }

  ngOnInit(): void {
  }

}
