import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  //Angular içerisindki paketleri (dahili veya third part paketleri) burada çağırırız.
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  //Bir paketi dışarıya açmak için burada tanımlanması gerekir.
  exports: [],
  //Injectiable türündeki servisleri tanımlamak için kullanılır.
  providers: [],
  //Başlangıç componentinin belirlendiği alan
  bootstrap: [AppComponent]
})
export class AppModule { }


