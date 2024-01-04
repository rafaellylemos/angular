import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-output-property',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @ViewChild('campoInput') campoValorInput!: ElementRef;

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
  this.campoValorInput.nativeElement.value++;
  this.mudouValor.emit({novoValor: this.valor});
}

decrementa() {
  this.campoValorInput.nativeElement.value--;
  this.mudouValor.emit({novoValor: this.valor});
}
}