import { RestCountriesService } from './services/api.service';
import { ContinentsService } from './services/continents.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[ContinentsService, RestCountriesService]
})
export class SharedModule { }
