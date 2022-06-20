import { catchError, exhaustMap, map, switchMapTo, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of, switchMap } from 'rxjs';
import { RestCountriesService } from 'src/app/shared/services/api.service';
import * as CountriesAction from '../actions/countries.action';

@Injectable()
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private countriesService: RestCountriesService
  ) {}

  fetchRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesAction.fetchRegion),
      exhaustMap((newRegion)=>
        this.countriesService
          .fetchRegion(newRegion)
          .pipe(map((region) => CountriesAction.fetchRegion({ region })))
      )
    )
  );
}
