import {Component} from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Form field with error messages */
@Component({
  selector: 'app-form-field-error-example',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
})
export class FormFieldErrorExampleComponent {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Coloque um e-mail válido!';
    }

    return this.email.hasError('email') ? 'E-mail incorreto' : '';
  }
}