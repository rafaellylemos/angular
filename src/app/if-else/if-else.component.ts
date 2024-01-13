import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.scss'
})
export class IfElseComponent {

  mostrarCursos: boolean = false;
  cursos: string[] = ["Angular 17", " Typescript", " HTML5", " CSS3", " SCSS"];
  mostrarTurnos: boolean = false;
  turno: string[] = ["Manhã", " Tarde", " Noite"];
  turnoSelecionado: string = "";
  cursoAtual: string = "";
  clickCurso: boolean = false;
  cursoSelecionado: boolean = false;


  hasCurso() {
    if (this.cursos.length > 0) {
      this.turnoSelecionado = this.turno.join(', ');
      this.mostrarTurnos = true;
    } else {
      console.log("Não tem cursos");
      this.mostrarTurnos = false;
    }
    console.log(this.turnoSelecionado);
      
  }

  openCoursesOptions() {
    if (this.cursos.length > 0) {
      for (let i = 0; i < this.cursos.length; i++) {
        this.mostrarCursos = true;
        this.cursoAtual = this.cursos[0];
      }
    } else {
      console.log("Não tem cursos");
      this.mostrarCursos;
    }
  }

  cleanFields() {
    this.mostrarCursos = false;
    this.mostrarTurnos = false;
    this.cursoAtual = "";
    this.clickCurso = false;
    this.cursoSelecionado = false;
    this.turnoSelecionado = "";
  }

  closeCoursesOptions() {
    if (this.cursos.length > 0) {
      for (let i = 0; i < this.cursos.length; i++) {
        this.cleanFields();
      }
    }
  }

  selecionarCurso(curso: string) {
    this.cursoAtual = curso;
    this.cursoSelecionado = true;
    console.log(`Curso selecionado: ${curso}`);
  }

  selecionarTurno(turno: string) {
    this.turnoSelecionado = turno;
    console.log(`Turno selecionado: ${turno}`);
  }

  done() {
    window.alert("Envio ok!");
  }
}
