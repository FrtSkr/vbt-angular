import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  //url'den app-page çağrıldıında AppComponent classını çalıştıracaktır.
  /*
  {  path: 'app-page',
     component: AppComponent,
} */
  {
    path: 'product',
    component: ProductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
