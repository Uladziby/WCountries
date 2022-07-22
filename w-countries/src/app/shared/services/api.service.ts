import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

//перписать запрос который возвращает строку 
//add spinner

 fetchRegion(region : string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(
      `https://restcountries.com/v3.1/region/${region}`
    );
  }

  fetchDetails(country : string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(
      `https://restcountries.com/v3.1/name/${country}`
    );
  }
}
