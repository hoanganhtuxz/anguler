import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/prodcut-interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API: string = 'https://60f592d718254c00176dff39.mockapi.io/products';

  constructor( private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
    // return this.http.get<Product[]>(this.API);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.API, product)
  }

  getDetail(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.API}/${id}`)
  }

  removeProduct(id :number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`);
  }

  updateProduct(data: Product): Observable<Product>{
    return this.http.put<Product>(`${this.API}/${data.id}`, data)
  }
}
