import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';


import { LoginFormComponent } from '../../components/login-form/login-form';
import { AuthStore } from '../../store/auth.store.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login.html'
})
export class Login {

  private authStore = inject(AuthStore);

  private router = inject(Router);

  login(data: { email: string; password: string }) {

    this.authStore.login(data.email);

    this.router.navigate(['/feed']);
  }

  loginWithGoogle() {

    this.authStore.loginWithGoogle();

    this.router.navigate(['/feed']);
  }
}