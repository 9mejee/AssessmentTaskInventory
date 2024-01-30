import { Routes } from '@angular/router';
import { IndexComponent } from './Product/index/index.component';
import { CreateComponent } from './/Product/create/create.component';
import { EditComponent } from './Product/edit/edit.component';
import { ViewComponent } from './Product/view/view.component';

export const routes: Routes = [

    { path: "Product", redirectTo: "Product/index", pathMatch: "full" },
    { path: "Product/index", component: IndexComponent },
    { path: "Product/create", component: CreateComponent },
    { path: "Product/edit", component: EditComponent },
    { path: "Product/view", component: ViewComponent },
];
