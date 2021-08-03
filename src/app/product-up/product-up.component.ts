import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/prodcut-interface';
import { ProductsService } from '../services/product.service';

@Component({
  selector: 'app-product-up',
  templateUrl: './product-up.component.html',
  styleUrls: ['./product-up.component.css']
})
export class ProductUpComponent implements OnInit {

  product: Product | undefined;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getDetail(params.id).subscribe( data => {
        this.product = data
      })
    })
   }

  ngOnInit(): void {
  }

  handleUpdate(){
    if(this.product !== undefined){
      this.productService.updateProduct(this.product).subscribe(data => {
        console.log('successfully, data: ', data)
        this.router.navigate(['/products'])
      })
    }
  }
}
