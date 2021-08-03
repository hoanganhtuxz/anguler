import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Product } from '../product/prodcut-interface';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = {
    id: Math.floor((1 + Math.random()) * 0x10000),
    name: '',
    image: '',
    price:0,
    status: true,
    description: '',

  };
  constructor(private productsService: ProductsService,private router:Router) { }

  ngOnInit(): void {
    console.log('for="exampleInpasdsa')
  }
  onHandleAdd(){
   console.log('add',this.product)
    this.productsService.addProduct(this.product).subscribe( data => console.log(data));
    this.router.navigate(['/products'])
  }

}
