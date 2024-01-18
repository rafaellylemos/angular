import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  imgCarousel01 = '../assets/01.jpg';
  imgCarousel02 = '../assets/02.jpg';
  imgCarousel03 = '../assets/03.jpg';

}
