import { ResponseICountry } from './../../shared/interfaces/interfaces';
import { RestCountriesService } from './../../shared/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICountry } from 'src/app/shared/interfaces/interfaces';
import { tap } from 'rxjs/operators'; 

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
  public country!: string;
  public dataCountry:ICountry = {
    name: {
      common: '',
      official: ''
    },
    capital: '',
    currencies: {
      EUR: {
        name: '',
        symbol: ''
      }
    },
    languages: '',
    population: 0,
    map: {
      googleMaps: ''
    },
    flags: {
      png: '',
      svg: ''
    },
    borders: [],
    subregion: ''
  } ;
  public subs!: Subscription;
  constructor(private route : ActivatedRoute, private restService : RestCountriesService) {}

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params)=>{
      this.country = params['id'];
    })
    this.subs = this.restService.fetchDetails(this.country)
    .pipe(
      tap((data: Array<ICountry>) => {
        console.log(data)
        this.dataCountry = data[0];
        //dispatch list country to the store отобразить данные красиво
      })
    ).subscribe()

  }
  fetchDetails(){
   
  }

}
