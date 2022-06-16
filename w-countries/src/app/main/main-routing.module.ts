import { CountriesComponent } from './countries/countries.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: {animation: 'Auth'} },
  {path : ':id', component: CountriesComponent},
  {path : ':id/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
