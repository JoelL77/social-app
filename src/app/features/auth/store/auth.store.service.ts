import {
  computed,
  effect,
  inject,
  Injectable,
  PLATFORM_ID,
  signal
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {

  private platformId = inject(PLATFORM_ID);

  user = signal<User | null>(null);

  isAuthenticated = computed(() => !!this.user());

  constructor() {

    // SOLO EN BROWSER

    if (isPlatformBrowser(this.platformId)) {

      const savedUser = localStorage.getItem('user');

      if (savedUser) {
        this.user.set(JSON.parse(savedUser));
      }

      effect(() => {

        const currentUser = this.user();

        if (currentUser) {

          localStorage.setItem(
            'user',
            JSON.stringify(currentUser)
          );

        } else {

          localStorage.removeItem('user');

        }

      });

    }
  }

  login(email: string) {

    const mockUser: User = {
      id: crypto.randomUUID(),
      name: 'Joel User',
      email,
      avatar: 'https://i.pravatar.cc/150'
    };

    this.user.set(mockUser);
  }

  loginWithGoogle() {

    const mockUser: User = {
      id: crypto.randomUUID(),
      name: 'Google User',
      email: 'google@gmail.com',
      avatar: 'https://i.pravatar.cc/150'
    };

    this.user.set(mockUser);
  }

  logout() {

    this.user.set(null);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user');
    }
  }
}