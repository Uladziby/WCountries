import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    CountriesComponent,
    MainComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MainRoutingModule,
  ],
  exports : [
    CountriesComponent,
    MainComponent,
  ]
})
export class MainModule { }
