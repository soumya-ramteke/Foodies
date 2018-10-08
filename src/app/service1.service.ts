import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  LIVE_URI = 'https://developers.zomato.com/api/v2.1';

  // location: string;
  // cuisine: string;
  constructor(private http: HttpClient) { }

   getRestaurants(location:string, cuisine:string) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
      })
    };

     return this.http.get(this.LIVE_URI + '/search?q=' + location + '&cuisines=' + cuisine, httpOptions);

    // return this.http.get('https://developers.zomato.com/api/v2.1/search?q=location&cuisines=cuisine', httpOptions);
    // this.http.get(this.LIVE_URI+"/search?q="+this.location,httpOptions);
}


sendDatato(res1: any) {
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
  })
};
this.http.post('http://localhost:3000/favourites' , res1).subscribe( data => {
  console.log('POST is successful');
}
);
 }
}
