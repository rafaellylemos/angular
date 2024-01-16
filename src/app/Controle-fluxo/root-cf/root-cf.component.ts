import { Component } from '@angular/core';
import { SwitchSwitchcaseComponent } from '../switch-switchcase/switch-switchcase.component';
import { IfElseComponent } from '../if-else/if-else.component';

@Component({
  selector: 'app-root-cf',
  standalone: true,
  imports: [IfElseComponent, SwitchSwitchcaseComponent],
  templateUrl: './root-cf.component.html',
  styleUrl: './root-cf.component.css'
})
export class RootCfComponent {

}
