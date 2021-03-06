import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  res: any = [ ];
  restaurants = [ ];

  constructor(private http: HttpClient) { }

  ngOnInit() { }

showCollectionsfav() {
  console.log('called showfavouriteCollections');
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'user-key': '5ab37ea4bd46c8144a9dc0ac84312024'
    })
  };

  this.http.get('http://localhost:3000/favourites').subscribe((res: any) => {
    this.restaurants = res;
    console.log(this.restaurants);
    });

}

deleteData(res1:any){

  this.http.delete('http://localhost:3000/favourites/' + res1.id).subscribe(
     data => {
     console.log('DELETE Request is successful');
    }
     );
}
}
