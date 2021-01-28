import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseOnboardedComponent } from './enterprise-onboarded.component';

describe('EnterpriseOnboardedComponent', () => {
  let component: EnterpriseOnboardedComponent;
  let fixture: ComponentFixture<EnterpriseOnboardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseOnboardedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseOnboardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
