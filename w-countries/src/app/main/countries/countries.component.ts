import { RestCountriesService } from './../../shared/services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  catchError,
  concatAll,
  map,
  Observable,
  of,
  pipe,
  Subscription,
  tap,
} from 'rxjs';
import { ICountry } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {

  public aSab: Subscription | undefined;
  public listOfCountries: ICountry[] =[];
  public region!: string;
  public country!: HTMLElement; 
  public subs!: Subscription;

  constructor(private http: HttpClient, private router : Router, private route : ActivatedRoute, private restService : RestCountriesService){}

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params)=>{
      this.region = params['id'];
    })
    this.aSab = this.restService.fetchRegion(this.region)
      .pipe(
        tap((data: ICountry[]) => {
          this.listOfCountries = data; 
          //dispatch list country to the store
        })
      )
      .subscribe();
  }


  getDetailsAboutCountry(event : Event){
    this.country  = event.target as HTMLElement;
    //dispatch countries to the store
    this.router.navigate(['Europe', this.country.innerText])
    this.aSab?.unsubscribe();
    this.subs.unsubscribe();
    
    //navigate  country 
  }
}
