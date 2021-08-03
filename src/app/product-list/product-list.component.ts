import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Product } from '../product/prodcut-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productEvent = new EventEmitter<Product>()

  products: Product[] | undefined;
  constructor( private productsService: ProductsService ) {  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe( data => this.products = data )

  }

  detail(id: number){
    this.productsService.getDetail(id)
  }

  handleRemove(id: number): void{
  let  confirm = window.confirm("ban co chac chan muon xoa?")
    if(confirm){
      this.productsService.removeProduct(id).subscribe( data => {
      this.products = this.products?.filter(item => item.id != data.id)
    })
    }
  }

}

