import { Component, inject } from '@angular/core';
import { AuthStore } from '../../../auth/store/auth.store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  authStore = inject(AuthStore);

  router = inject(Router);

  logout() {

    this.authStore.logout();

    this.router.navigate(['/']);
  }


}
