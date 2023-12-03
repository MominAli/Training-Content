import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productdata } from './add-product/productmodel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // create product using post method

  addProduct(data: productdata) {
    return this.http.post('http://localhost:3000/product', data);
  }

  // Show product using Get methods
  getProduct() {
    return this.http.get<productdata[]>('http://localhost:3000/product');
  }
}