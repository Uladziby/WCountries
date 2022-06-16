import { ResponseICountry } from './../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

  fetchRegion(region : string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(
      `https://restcountries.com/v3.1/region/${region}`
    );
  }

  fetchDetails(country : string): Observable<Array<ICountry>> {
    return this.http.get<Array<ICountry>>(
      `https://restcountries.com/v3.1/name/${country}`
    );
  }
}
