import { Routes } from '@angular/router';

import { canActivateAuthRole } from './guards/auth-role.guard';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'view-transactions' },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'view-profile' },
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', component: NotFoundComponent },
];
