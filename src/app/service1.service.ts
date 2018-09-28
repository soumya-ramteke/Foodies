import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  LIVE_URI= "https://developers.zomato.com/api/v2.1";


  constructor(private http: HttpClient) {

   }

   getRestaurants()
   {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
      })
    };

    return this.http.get('https://developers.zomato.com/api/v2.1/search', httpOptions);
}
}
