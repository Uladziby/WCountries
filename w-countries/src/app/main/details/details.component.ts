import { isFetchinAction } from './../../core/store/reducers/loading.reducer';
import { AppState, IServicePhotos } from './../../shared/interfaces/interfaces';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ICountry } from 'src/app/shared/interfaces/interfaces';
import { find, tap, map, debounceTime } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as fromCountries from '../../core/store/reducers/countries.reducer';
import * as fromLoading from '../../core/store/reducers/loading.reducer';
import { ImagesService } from 'src/app/shared/services/imgages.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  public currentBG!: string;
  public query!: string;
  public country!: string;
  public isFetch: boolean= true;
  public isFetching$!: Observable<boolean>;
  public countries$: Observable<ICountry> = this.store.pipe(select(fromCountries.selectDetailStore));

  public subs!: Subscription;
  public subsImg!: Subscription;

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

  constructor(
    private store: Store<AppState>,
    private imgService: ImagesService
  ) {}

  ngOnInit(): void {
    this.isFetching$ = this.store.pipe(select(fromLoading.selectIsFetching));
    this.isFetching$.subscribe(
      (x)=> {
        setTimeout(()=>{
          this.isFetch = x
        },2000)
      }
    );
    this.store.dispatch(isFetchinAction({isLoading : true}))
    this.subs = this.countries$
      .pipe(
        tap((data: ICountry) => {
          this.dataCountry = data;
        })
      )
      .subscribe((country) => {
        this.subsImg = this.imgService
          .fetchPhotoByQuery(country.name.common)
          .pipe(
            tap((data: IServicePhotos) => {
              this.currentBG = data.photos[0].src.original;
            })
          )
          .subscribe(()=>{
            debounceTime(2000),
            this.store.dispatch(isFetchinAction({isLoading : false}))

          });
      });
     /*  setTimeout(()=>{
        this.store.dispatch(isFetchinAction({isLoading : false}))
        console.log(this.isFetching$)
      },4000) */
  }
  ngOnDestroy(): void {
    this.store.dispatch(isFetchinAction({isLoading : false}))
    this.subs.unsubscribe();
    this.subsImg.unsubscribe();
  }
}
