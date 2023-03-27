import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/Product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product : Product;

  reactiveForm : FormGroup;

  constructor(private productService : ProductService, private router : Router, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      if(id != null){
        this.product = this.productService.findById(parseInt(id));
      }
    },error => {

    },()=>{

    });
    this.reactiveForm = new FormGroup({
      id : new FormControl(this.product.id),
      name : new FormControl(this.product.name),
      price : new FormControl(this.product.price),
      descriptions : new FormControl(this.product.descriptions)
    });
  }



  ngOnInit(): void {
  }

  update(){
    this.productService.update(this.reactiveForm.value);
    this.router.navigateByUrl('');
  }
}
