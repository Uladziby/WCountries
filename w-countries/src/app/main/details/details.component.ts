import { AppState, IServicePhotos } from './../../shared/interfaces/interfaces';
import { RestCountriesService } from './../../shared/services/api.service';
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ICountry } from 'src/app/shared/interfaces/interfaces';
import { find, tap, map } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromCountries from '../../core/store/reducers/countries.reducer';
import { ImagesService } from 'src/app/shared/services/imgages.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy{
  public currentBG!: string;
  public query!: string;
  public country!: string;
  public countries$!: Observable<ICountry>;
  public dataCountry: ICountry = {
    name: {
      common: '',
      official: '',
    },
    capital: '',
    currencies: {
      EUR: {
        name: '',
        symbol: '',
      },
    },
    population: 0,
    map: {
      googleMaps: '',
    },
    flags: {
      png: '',
      svg: '',
    },
    borders: [],
    subregion: '',
    area: 0,
    languages: {},
  };
  public subs!: Subscription;
  public subsImg!: Subscription;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private imgService: ImagesService
  ) {}
  

  ngOnInit(): void {
    this.countries$ = this.store.pipe(select(fromCountries.selectDetailStore));
  this.subs =   this.countries$
      .pipe(
        tap((data: ICountry) => {
          this.dataCountry = data;
        })
      )
      .subscribe((country) => {
       // this.query = country.name.common;
        this.subsImg = this.imgService
          .fetchPhotoByQuery(country.name.common)
          .pipe(
            tap((data: IServicePhotos) => {
              this.currentBG = data.photos[0].src.original;
              console.log(data.photos[0], 'photo');
            })
          )
          .subscribe()
      })

    console.log(this.query, 'this.query');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.subsImg.unsubscribe();
   }
}
