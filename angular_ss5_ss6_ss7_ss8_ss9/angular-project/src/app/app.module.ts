import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDangKiComponent } from './ss6_component/form_dang_ki/form-dang-ki/form-dang-ki.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserInforComponent } from './ss6_component/form_dang_ki/user-infor/user-infor.component';
import { FormDangNhapComponent } from './ss6_component/form_dang_nhap/form-dang-nhap/form-dang-nhap.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDangKiComponent,
    UserInforComponent,
    FormDangNhapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
