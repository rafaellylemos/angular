import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuShopComponent } from './menu-shop.component';

describe('MenuShopComponent', () => {
  let component: MenuShopComponent;
  let fixture: ComponentFixture<MenuShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuShopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
