import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Category } from '../data-type';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private BASE_URL: String = 'http://localhost:8080/category';
  constructor(private http: HttpClient) {}

  getAllCategory() {
    return this.http.get<Category[]>(`${this.BASE_URL}`);
  }
}
