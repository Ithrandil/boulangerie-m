import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidatedModalComponent } from './form-validated-modal.component';

describe('FormValidatedComponent', () => {
  let component: FormValidatedModalComponent;
  let fixture: ComponentFixture<FormValidatedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormValidatedModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidatedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
