import { Routes } from '@angular/router';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./pages/login/login')
                        .then(l => l.Login),
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./pages/login/login')
                        .then(l => l.Login),
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ],
    }
];
