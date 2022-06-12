import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [
    CountriesComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports : [
    CountriesComponent,
    MainComponent,
  ]
})
export class MainModule { }
