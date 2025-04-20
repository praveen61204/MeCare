import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionComponent } from './doctor-prescriptions.component';

describe('DoctorPrescriptionsComponent', () => {
  let component: PrescriptionComponent;
  let fixture: ComponentFixture<PrescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionComponent]
    });
    fixture = TestBed.createComponent(PrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
