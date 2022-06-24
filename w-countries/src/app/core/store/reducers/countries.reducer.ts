import { ICountry } from 'src/app/shared/interfaces/interfaces';
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as CountryActions from '../actions/countries.action';

export  interface AppState{
    main: FeatureMain ;
}
export interface FeatureMain {
    region : string;
    countries : ICountry[],
    detail : ICountry | undefined,
  }

export const initialState : FeatureMain = {
    region: '',
    countries: [],
    detail: undefined
}

export const countryReducer = createReducer(
    initialState,
    on(CountryActions.fetchRegion, (state, {region}) =>(
        {
            ...state, 
            region: region,
        }
    )),
    on(CountryActions.fetchCountries, (state, {countries}) =>(
        {
            ...state, 
            countries: countries,
        }
    )),
    on(CountryActions.fetchDetail, (state, {detail}) =>(
        {
            ...state, 
            detail: detail,
        }
    )),
)

/* export const getRegionStore = createFeatureSelector<AppState>('region');
export const getCountriesStore = createFeatureSelector<AppState>('countries');
export const getDetailStore = createFeatureSelector<AppState>('detail'); */

export const selectFeatureMain = (state: AppState) => state.main;

export const selectRegion = createSelector(
    selectFeatureMain,
    (state : FeatureMain)=> state.region
)
export const selectCountriesStore = createSelector(
    selectFeatureMain,
    (state : FeatureMain)=> state.countries
)
export const selectDetailStore = createSelector(
    selectFeatureMain,
    (state : FeatureMain)=> state.detail
)

