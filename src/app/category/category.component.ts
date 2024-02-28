import { Component } from '@angular/core';
import { Category } from '../data-type';
import { CategoryService } from '../service/category.service';
import { ProductListComponent } from '../product-list/product-list.component';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categoryList!: Category[];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private rout: Router
  ) {}
  ngOnInit(): void {
    this.categoryService
      .getAllCategory()
      .subscribe((list) => (this.categoryList = list));
  }

  getCategory(category: string) {
    this.productService.addPurchaseItem(category);
  }
}
