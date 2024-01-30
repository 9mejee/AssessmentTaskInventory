import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes :  Routes = [
  { path: "index", component: IndexComponent },
  { path: "create", component: CreateComponent },
  { path: "edit", component: EditComponent },
  { path: "view", component: ViewComponent },
];


@NgModule({
  declarations: [IndexComponent,CreateComponent,EditComponent,ViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[ProductService],
  exports: [RouterModule]
})
export class ProductModule { }
