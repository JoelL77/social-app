import { Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth-guard';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.routes')
                .then(a => a.AuthRoutes)
    },
    {
        path: 'feed',
        canActivate: [authGuard],
        loadChildren: () =>
            import('./features/feed/feed.routes')
                .then(f => f.routes)
    },
    {
        path: '**',
        redirectTo: 'auth'
    }

];
