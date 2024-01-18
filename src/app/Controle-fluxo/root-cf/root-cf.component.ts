import { Component } from '@angular/core';
import { SwitchSwitchcaseComponent } from '../switch-switchcase/switch-switchcase.component';
import { IfElseComponent } from '../if-else/if-else.component';
import { NgClassComponent } from '../ng-class/ng-class.component';

@Component({
  selector: 'app-root-cf',
  standalone: true,
  imports: [IfElseComponent, SwitchSwitchcaseComponent, NgClassComponent],
  templateUrl: './root-cf.component.html',
  styleUrl: './root-cf.component.css'
})
export class RootCfComponent {

  meuFavorito: boolean = false;

}
