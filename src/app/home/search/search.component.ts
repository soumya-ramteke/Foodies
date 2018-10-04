import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../service1.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { $ } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  res: any;
  location:string;
 cuisine:string;
 LIVE_URI= "https://developers.zomato.com/api/v2.1";

 /* constructor(private some_name: Service1Service) {  }*/
    constructor(private http: HttpClient){

    }

  ngOnInit() { }

  random() {
    console.log("hello world");
    
    
    /*this.some_name.getRestaurants().subscribe(res => {
      console.log(res);
    })*/

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
      })
    };

    //this.http.get(this.LIVE_URI+"/search?q="+this.location,httpOptions);
     /*this.http.get(this.LIVE_URI+"/search?q="+this.location+"&cuisines="+this.cuisine, httpOptions).subscribe(res => {
      console.log(res)}); */
      this.http.get(this.LIVE_URI+"/search?q="+this.location+"&cuisines="+this.cuisine, 
    httpOptions).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant
      })
    });
}

sendData(res1:any){
  const httpOptions={
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
  })
}

this.http.post("http://localhost:3000/posts",res1).subscribe(data=>{
  console.log("POST is successful");
}
);
}

sendDatato(res1:any){
  const httpOptions={
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
  })
}
this.http.post("http://localhost:3000/favourites",res1).subscribe(data=>{
  console.log("POST is successful");
}
);
 }
}
