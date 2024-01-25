import { Component, Input} from "@angular/core";
import { MainShopComponent } from "../main-shop/main-shop.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MainShopComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() content: string = '';

  



  onClickFav() {
    
  }

  onClickBuy() {

  }

}
