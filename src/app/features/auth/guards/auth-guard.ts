import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../store/auth.store.service';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {


  const platformId = inject(PLATFORM_ID);
  const authStore = inject(AuthStore);
  const router = inject(Router);

  if (!isPlatformBrowser(platformId)) {
    return true;
  }

  return authStore.isAuthenticated()
    ? true
    : router.createUrlTree(['/']);
};