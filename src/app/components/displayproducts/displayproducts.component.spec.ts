import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayproductsComponent } from './displayproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('DisplayproductsComponent', () => {
  let component: DisplayproductsComponent;
  let fixture: ComponentFixture<DisplayproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule],
      declarations: [DisplayproductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
