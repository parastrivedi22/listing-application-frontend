import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-similar-product-list',
  templateUrl: './similar-product-list.component.html',
  styleUrls: ['./similar-product-list.component.css'],
})
export class SimilarProductListComponent implements OnInit {
  @Input() product!: Product;
  productList!: Product[];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService
      .getSimilarProducts(this.product.keywords, this.product.category)
      .subscribe({
        next: (productList) => {
          this.productList = productList;
        },
      });
  }
}
