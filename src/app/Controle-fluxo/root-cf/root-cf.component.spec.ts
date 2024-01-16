import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCfComponent } from './root-cf.component';

describe('RootCfComponent', () => {
  let component: RootCfComponent;
  let fixture: ComponentFixture<RootCfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootCfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RootCfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
