import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient } from 'pexels';

export const baseUrlPexelApi = "https://api.pexels.com/v1/"
export const keyPexelAPi = "563492ad6f917000010000012c78d655eeda4041893df03969da1646";

@Injectable({
    providedIn: 'root',
  })
export class ImagesService {
    public client : any;
    public options  = { headers: new HttpHeaders({'Authorization': 'Bearer ' + keyPexelAPi})}

    constructor(private http : HttpClient){
        this.client = createClient(keyPexelAPi);
    }
    
    fetchPhotoByQuery(query: string): Observable<any>{
        console.log(query, 'query')
       return this.http.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, this.options)
    }
}