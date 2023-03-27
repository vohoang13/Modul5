import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./ss7_component/list-product/list-product.component";
import {CreateProductComponent} from "./ss7_component/create-product/create-product.component";
import {EditProductComponent} from "./ss7_component/edit-product/edit-product.component";
import {DeleteProductComponent} from "./ss7_component/delete-product/delete-product.component";


const routes: Routes = [
  {
    path : '', component : ListProductComponent
  },
  {
    path: 'create',component: CreateProductComponent
  },
  {
    path: 'update/:id', component: EditProductComponent
  },
  {
    path: 'delete/:id', component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
