import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchSwitchcaseComponent } from './switch-switchcase.component';

describe('SwitchSwitchcaseComponent', () => {
  let component: SwitchSwitchcaseComponent;
  let fixture: ComponentFixture<SwitchSwitchcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchSwitchcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
