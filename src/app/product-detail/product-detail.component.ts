import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/product.service';
import { Product } from '../product/prodcut-interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductsService) {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getDetail(params.id).subscribe( data => {
        this.product = data
      })
    })
   }

  ngOnInit(): void {
  }

}
