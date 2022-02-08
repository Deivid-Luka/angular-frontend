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
  isShow = false;


  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductsList();
  }

  deleteProduct(id: number) {
    this.router.navigate(['delete', id]);
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
  productUpdate(id:number){
    this.router.navigate(['update',id]);
  }


}
