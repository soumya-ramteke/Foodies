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
     this.http.get(this.LIVE_URI+"/search?q="+this.location, httpOptions).subscribe(res => {
      console.log(res)});

  }
}
