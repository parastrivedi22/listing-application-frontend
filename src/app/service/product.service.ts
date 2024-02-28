import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private BASE_URL: String = 'http://localhost:8080/product';
  constructor(private http: HttpClient) {}

  private storedItemsSubject = new BehaviorSubject<string>('');
  storedItems$ = this.storedItemsSubject.asObservable();
  addPurchaseItem(item: string) {
    this.storedItemsSubject.next(item);
  }

  addProduct(product: Product, file: any) {
    let data = new FormData();
    data.append('file', file);
    data.append('productDto', JSON.stringify(product));

    return this.http.post(`${this.BASE_URL}/create`, data);
  }

  getAllProduct() {
    return this.http.get<Product[]>(`${this.BASE_URL}`);
  }

  getAllProductByCategory(category: string) {
    return this.http.get<Product[]>(`${this.BASE_URL}/by?category=${category}`);
  }

  getProductById(id: any) {
    return this.http.get<Product>(`${this.BASE_URL}/${id}`);
  }

  getSimilarProducts(keyword: string, category: string) {
    return this.http.get<Product[]>(
      `${this.BASE_URL}/search?keyword=${keyword}&category=${category}`
    );
  }
}
