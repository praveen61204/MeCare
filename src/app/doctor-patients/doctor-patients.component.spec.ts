import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsComponent } from './doctor-patients.component';

describe('DoctorPatientsComponent', () => {
  let component: PatientsComponent;
  let fixture: ComponentFixture<PatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientsComponent]
    });
    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
