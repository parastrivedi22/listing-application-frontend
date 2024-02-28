import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductListComponent } from './similar-product-list.component';

describe('SimilarProductListComponent', () => {
  let component: SimilarProductListComponent;
  let fixture: ComponentFixture<SimilarProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
