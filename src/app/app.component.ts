import { ProductDetailsComponent } from './product-details/product-details.component';
import { Observable } from "rxjs";
import { ProductService } from "./product.service";
import { Product } from "./product";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { isFormattedError } from '@angular/compiler';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';
  products: Observable<Product[]>;
  searchCriteria:any;
  isShow = false;
  isShowRoute = false;

  constructor(private productService: ProductService,
    private router: Router) { }

    ngOnInit(): void {
    }
  
    reloadData() {
      this.products = this.productService.search(this.searchCriteria);
      this.isShow = false;
      this.isShowRoute = true;
    }

  deleteProduct(id: number) {
    var result=confirm("Want to delete?");
    if(result){
      this.productService.deleteProduct(id)
      .subscribe(
        (        data): void => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
    this.hide();
    this.isShowRoute = false;
  }
  productUpdate(id:number){
    this.router.navigate(['update',id]);
    this.hide();
    this.isShowRoute = false;
  }
  hide(){
    this.isShow = true;
    this.isShowRoute = false;
  }

}