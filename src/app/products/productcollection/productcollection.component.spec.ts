import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcollectionComponent } from './productcollection.component';

describe('ProductcollectionComponent', () => {
  let component: ProductcollectionComponent;
  let fixture: ComponentFixture<ProductcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
