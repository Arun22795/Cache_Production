import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionPaymentComponent } from './subcription-payment.component';

describe('SubcriptionPaymentComponent', () => {
  let component: SubcriptionPaymentComponent;
  let fixture: ComponentFixture<SubcriptionPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
