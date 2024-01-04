import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, InputPropertyComponent, OutputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome: 'Rafa',
    idade: 34,
    end: {
      cidade: 'Recife',
      estado: 'PE'
    }
  }

  nomeDoCurso: string = 'Angular';

  valorInicial: number =  15;

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(event: any) {
    console.log(event.target.value)
    this.valorSalvo = event.target.value;
  }

  OnMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  novoNome(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.nome = (event.target as HTMLInputElement).value;
  }

  //salvarValor e novoNome são duas formas diferentes de chegar ao mesmo resultado. Pode-se usar qualquer uma. Mas é peferível sempre optar pela verificação de tipo precisa (Ex.: event: Event) para evitar possíveis erros e tornar o código mais confiável.

  onMudouValor(event: any) {
    console.log(event.novoValor);
  }

}
