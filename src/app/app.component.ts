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


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DataBindingComponent, CicloComponent, NgIf, MenuComponent, MatSlideToggleModule,
    FormFieldErrorExampleComponent, RootCfComponent, MenuShopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'curso';

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo() {
    this.deletarCiclo = true;
  }
}
