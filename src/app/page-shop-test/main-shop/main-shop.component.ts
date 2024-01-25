import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main-shop',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-shop.component.html',
  styleUrl: './main-shop.component.css'
})
export class MainShopComponent implements OnInit{


ngOnInit(): void {
  console.log('Oi');
}
produtos = [{
  title: 'Teste',
  value: 15,
  content: 'Descrição de teste'
},
{
  title: 'Teste2',
  value: 20,
  content: 'Descrição de teste2'
},
{
  title: 'Teste3',
  value: 44,
  content: 'Descrição de teste3'
},
{
  title: 'Teste4',
  value: 7,
  content: 'Descrição de teste4'
},
{
  title: 'Teste5',
  value: 13,
  content: 'Descrição de teste5'
},

]
}
