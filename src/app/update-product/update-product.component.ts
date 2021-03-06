import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  product: Product;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductService, private location: Location) { }

  ngOnInit() {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));

  }
  updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => {
        console.log(data);
        this.product = new Product();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateProduct();    
  }

  gotoList() {
    this.router.navigate(['/product']);
  }
  back(): void {
    this.location.back()
  }

}
