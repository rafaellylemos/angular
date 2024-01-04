import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-output-property',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Output() mudouValor = new EventEmitter();

private _valor: number = 0;

  @Input()
  set valor(value: any) {
    this._valor = +value;
  }

  get valor(): number {
    return this._valor;
  }

incrementa() {
  this.valor++;
  this.mudouValor.emit({novoValor: this.valor});
}

decrementa() {
  this.valor--;
  this.mudouValor.emit({novoValor: this.valor});
}
}
