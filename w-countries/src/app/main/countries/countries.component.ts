import { selectRegion } from './../../core/store/reducers/countries.reducer';
import { select, Store } from '@ngrx/store';
import { RestCountriesService } from './../../shared/services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { AppState, ICountry } from 'src/app/shared/interfaces/interfaces';
import * as CountryAction from '../../core/store/actions/countries.action';
import * as fromLoading from '../../core/store/reducers/loading.reducer';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  public isFetching: boolean = true;
  public aSab: Subscription | undefined;
  public listOfCountries: ICountry[] = [];
  public region!: string;
  public region$!: Observable<string>;
  public country!: HTMLElement;
  public subs!: Subscription;
  public targetCountry!: Observable<ICountry>;
  public isFetch: boolean = true;
  public isFetching$!: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private restService: RestCountriesService
  ) {}

  ngOnInit(): void {
    this.region$ = this.store.pipe(select(selectRegion));
    this.subs = this.region$.subscribe((region) => {
      this.region = region;
    });
    this.isFetching$ = this.store.pipe(select(fromLoading.selectIsFetching));
    this.isFetching$.subscribe((x) => {
      setTimeout(() => {
        this.isFetch = x;
      }, 2000);
    });

    this.aSab = this.restService
      .fetchRegion(this.region)
      .pipe(
        tap((data: ICountry[]) => {
          this.listOfCountries = data;
          this.store.dispatch(
            CountryAction.fetchCountries({ countries: data })
          );
        })
      )
      .subscribe(() => {
        this.isFetching = true;
      });
  }

  getDetailsAboutCountry(event: Event) {
    this.country = event.target as HTMLElement;
    this.aSab = this.restService
      .fetchDetails(this.country.innerText)
      .pipe(
        tap((data) => {
          console.log(...data, 'adad');
          this.store.dispatch(CountryAction.fetchDetail({ detail: data[0] }));
        })
      )
      .subscribe();
    this.router.navigate(['Europe', this.country.innerText]);
  }
}
