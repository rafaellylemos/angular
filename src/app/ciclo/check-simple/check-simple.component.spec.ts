import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSimpleComponent } from './check-simple.component';

describe('CheckSimpleComponent', () => {
  let component: CheckSimpleComponent;
  let fixture: ComponentFixture<CheckSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckSimpleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
