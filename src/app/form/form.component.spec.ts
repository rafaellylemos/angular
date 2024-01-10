import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldErrorExampleComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormFieldErrorExampleComponent;
  let fixture: ComponentFixture<FormFieldErrorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldErrorExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormFieldErrorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
