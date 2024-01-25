import { Component } from '@angular/core';
import { MainShopComponent } from '../main-shop/main-shop.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-menu-shop',
  standalone: true,
  imports: [MainShopComponent, CarouselComponent],
  templateUrl: './menu-shop.component.html',
  styleUrl: './menu-shop.component.css'
})
export class MenuShopComponent {
  
}
