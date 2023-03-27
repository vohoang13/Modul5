import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  reactiveForm : FormGroup;

  constructor(private productService : ProductService, private router : Router) {
    this.reactiveForm = new FormGroup({
      id : new FormControl(),
      name : new FormControl(),
      price : new FormControl(),
      descriptions : new FormControl()
    })
  }

  ngOnInit(): void {
  }

  addNew() {
    if(this.reactiveForm.valid){
      this.productService.addNewProduct(this.reactiveForm.value);
      this.router.navigateByUrl('');
    }
  }
}
