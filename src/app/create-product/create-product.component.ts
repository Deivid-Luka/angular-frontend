import { ProductService } from '../product.service';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product=new Product();
  submitted=false;

  constructor(private productService:ProductService,
    private router:Router,private location: Location) { }

  ngOnInit() {
  }
  newProduct():void{
    this.submitted=false;
    this.product = new Product();
  }
  save(){
    this.productService.createProduct(this.product).subscribe(async data => {
      console.log(data)
      this.product = new Product();
      await new Promise(f => setTimeout(f, 1000));
      this.gotoList();
    },
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/products']);
  }

  back(): void {
    this.location.back()
  }

}
