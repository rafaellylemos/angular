
import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { MenuComponent } from './menu/menu.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FormFieldErrorExampleComponent } from './form/form.component';
import { RootCfComponent } from './Controle-fluxo/root-cf/root-cf.component';
import { MenuShopComponent } from './page-shop-test/menu-shop/menu-shop.component';
import { CheckSimpleComponent } from './ciclo/check-simple/check-simple.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DataBindingComponent, CicloComponent, NgIf, MenuComponent, MatSlideToggleModule,
    FormFieldErrorExampleComponent, RootCfComponent, MenuShopComponent, CheckSimpleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title: string = 'curso';
  valor: number = 5;
  deletarCiclo: boolean = false;
  name: any = '';
  nick: string = '';
  aviso: string = 'Apelido não declarado'
  tentativas: number = 0;
  pedirNome: boolean = false;

  
  solicitarInfo() {
    while (this.name === '' || this.name === null) {
      const userInput = window.prompt('Digite seu nome: ');

      if(userInput == null) {

       for (let i = 0; i < 3; i++){
        this.tentativas = i;
        window.prompt('Por favor, digite seu nome:');
       }
       if(this.tentativas < 3) {
        window.alert('Até mais!');
        break;
       }
      }

      if (userInput !== null || userInput !== '') {
        this.name = userInput;
        const userNick = window.prompt('Olá, ' + userInput + '! Digite seu apelido: ');
        this.nick = userNick!;
        } 
        if(this.nick == null) {
          this.nick = this.aviso;
        }
    }
    this.pedirNome = true;
  }
  

  mudarValor(): void {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
