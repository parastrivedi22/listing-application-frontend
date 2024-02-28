import { Component, Input } from '@angular/core';
import { Product } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router, private route: ActivatedRoute) {}

  reloadValue!: number;

  triggerReload() {
    this.reloadValue++;
    this.router.navigate(['/child-component', { reload: this.reloadValue }]);
  }
}
