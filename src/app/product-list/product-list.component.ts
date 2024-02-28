import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.storedItems$.subscribe((rs) => {
      if (rs !== 'all') {
        this.showCategoryBise(rs);
      } else {
        this.getAllProducts();
      }
    });
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProduct().subscribe({
      next: (productList) => {
        this.productList = productList;
      },
    });
  }

  showCategoryBise(category: string) {
    this.productService.getAllProductByCategory(category).subscribe({
      next: (productList) => {
        this.productList = productList;
      },
    });
  }
}
