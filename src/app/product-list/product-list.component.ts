import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Observable } from "rxjs";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Observable<Product[]>;


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductsList();
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
  }
  productUpdate(id:number){
    this.router.navigate(['update',id]);
  }


}
