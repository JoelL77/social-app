import { Routes } from '@angular/router';
import { authGuard } from '../auth/guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path : '',
                loadComponent: () =>
                    import('./pages/feed/feed.page')
                        .then(f => f.FeedPage),
                canActivate: [authGuard],
            },
            {
                path : 'feed',
                loadComponent: () =>
                    import('./pages/feed/feed.page')
                        .then(f => f.FeedPage),
                canActivate: [authGuard],
            },
            {
                path: '**',
                redirectTo: 'feed'
            }
        ],
    }
];
