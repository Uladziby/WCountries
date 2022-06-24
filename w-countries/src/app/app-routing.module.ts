import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteEnum } from './shared/interfaces/enums';

const routes: Routes = [
  {
    path: RouteEnum.world,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: RouteEnum.world,
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
/*   {
    path: RouteEnum.countries,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: RouteEnum.boards,
    loadChildren: () =>
      import('./main/board.module').then((m) => m.BoardModule),
    canLoad: [LoginGuard],
    canActivate: [LoginGuard],
    component: BoardListComponent,
    pathMatch: 'full',
  },
  {
    path: RouteEnum.country + '/:id',
    loadChildren: () =>
      import('./board-route/board-route.module').then(
        (m) => m.BoardRouteModule
      ),
  }, */
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}