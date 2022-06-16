import { CountriesComponent } from './countries/countries.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: {animation: 'Region'} },
  {path : ':id', component: CountriesComponent, data: {animation: 'Country'}},
  {path : ':id/:id', component: DetailsComponent, data: {animation: 'Detail'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
