import { AppState, FeatureMain, ICountry } from 'src/app/shared/interfaces/interfaces';
import { createReducer, createSelector, on } from "@ngrx/store";
import * as CountryActions from '../actions/countries.action';



export const emptyCountry : ICountry ={
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
    population: 0,

    flags: {
        png: '',
        svg: ''
    },
    borders: [],
    subregion: '',
    area: 0,
    languages: {},
    map: {
        googleMaps: ''
    }
}
export const initialState : FeatureMain = {
    region: '',
    countries: [],
    detail:emptyCountry,
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
            detail : detail
        }
    )),
)

export const selectFeatureMain =  (state: AppState) => state.main;

export const selectRegion = createSelector(
    selectFeatureMain,
    (state : FeatureMain) => state.region
)
export const selectCountriesStore = createSelector(
    selectFeatureMain,
    (state : FeatureMain)=> state.countries
)
export const selectDetailStore = createSelector(
    selectFeatureMain,
    (state : FeatureMain)=> state.detail
)

