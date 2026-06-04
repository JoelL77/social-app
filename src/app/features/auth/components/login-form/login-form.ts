import {
  Component,
  EventEmitter,
  inject,
  Output,
  signal
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

  
  isLoading = signal(false);
  isGoogleLoading = signal(false);


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

    this.isLoading.set(true);

    setTimeout(() => {

      this.submitLogin.emit({
        email: this.loginForm.value.email!,
        password: this.loginForm.value.password!
      });

      this.isLoading.set(false);

    }, 800)



  }

  onGoogleLogin() {
    this.isGoogleLoading.set(true);

    setTimeout(() => {

      this.googleLogin.emit();

      this.isGoogleLoading.set(false);

    }, 800)
  }
}