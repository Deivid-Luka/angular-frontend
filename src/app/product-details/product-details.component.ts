import { Product } from '../product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private ProductService: ProductService,private location: Location) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.ProductService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  back(): void {
    this.location.back()
  }

}
