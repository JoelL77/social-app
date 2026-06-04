import {
  Component,
  EventEmitter,
  inject,
  Output
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { LoginForm } from '../../interfaces/login.form.interface';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html'
})
export class LoginFormComponent {

  private fb = inject(FormBuilder);

  @Output() submitLogin = new EventEmitter<LoginForm>();

  @Output() googleLogin = new EventEmitter<void>();


  loginForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]
  });

  onSubmit() {

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.submitLogin.emit({
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    });
  }

  onGoogleLogin() {
    this.googleLogin.emit();
  }
}