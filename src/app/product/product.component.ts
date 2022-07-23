import { Component, OnInit } from '@angular/core';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  product: ProductModel = new ProductModel();
  ngOnInit(): void {
   // this.setProduct();
    this.setProduct2();
  }

  setProduct(){
    this.product.name = 'Fırat';
    this.product.year = 2022;
    this.product.date = new Date();
    this.product.bool = true;
  }
  setProduct2(){
  this.product ={
    name : 'Fırat',
    year : 2022,
    date : new Date(),
    bool : true
  }
  }
}
