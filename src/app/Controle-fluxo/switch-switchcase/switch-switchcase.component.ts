import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-switchcase',
  standalone: true,
  imports: [],
  templateUrl: './switch-switchcase.component.html',
  styleUrl: './switch-switchcase.component.css'
})
export class SwitchSwitchcaseComponent {

  aba: string = '';

  onHome() {
    this.aba = 'home';
  }

  onFeature() {
    this.aba = 'feature';
  }

  onPricing () {
    this.aba = 'pricing';
  }

}
