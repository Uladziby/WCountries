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

  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}