import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.maxLength(4)]]
  });

  constructor(private fb: FormBuilder) { }

  handleSubmit(): void {
    if (!this.registerForm) {
      return;
    }

    const form = this.registerForm;

    if (form.invalid) {
      console.log('Form is invalid!');

      return;
    }

    console.log('invalid', form.invalid);
    console.log(form.value);

    // form.value => ngModel on input
    const { email, password } = form?.value;

    // two ways of reseting data
    // form.reset();
    form.setValue({ email: '', password: '' });
  }
}
