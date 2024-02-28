import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { CategoryService } from '../service/category.service';
import { Category } from '../data-type';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;
  imageFile!: File;
  alertMsg: string = '';
  loading: boolean = false;

  categoryList!: Category[];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private formBuild: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuild.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      productDescription: ['', Validators.required],
      keywords: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });

    this.categoryService
      .getAllCategory()
      .subscribe((list) => (this.categoryList = list));
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    if (this.imageFile != null || this.productForm.invalid) {
      this.productService
        .addProduct(this.productForm.value, this.imageFile)
        .subscribe({
          next: () => {
            this.alertMsg = 'added';
          },
          complete: () => {
            this.router.navigate(['']);
          },
          error: () => {
            this.alertMsg = 'error';
          },
        });
    } else {
      this.alertMsg = 'error';
    }
  }

  onChageFile(data: any) {
    this.imageFile = data.target.files[0];
  }
}
