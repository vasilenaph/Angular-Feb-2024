import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm: NgForm | undefined;


  // Renders static content
  // ngOnInit(): void {}

  // Renders the final content + dynamic content
  // ngAfterViewInit(): void {}

  formSubmitHandler() {
    if (!this.loginForm) {
      return;
    }

    const form = this.loginForm;

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
