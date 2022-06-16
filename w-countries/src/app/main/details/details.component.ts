import { RestCountriesService } from './../../shared/services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICountry } from 'src/app/shared/interfaces/interfaces';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public country!: string; 
  public subs!: Subscription;
  constructor(private http: HttpClient, private router : Router, private route : ActivatedRoute, private restService : RestCountriesService) { }

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params)=>{
      this.country = params['id'];
      console.log(this.country)
    })
    this.subs = this.restService.fetchDetails(this.country)
    .pipe(
      tap((data: ICountry) => {
        console.log(   data
    )
        //dispatch list country to the store отобразить данные красиво
      })
    ).subscribe()

  }
  fetchDetails(){
   
  }

}
