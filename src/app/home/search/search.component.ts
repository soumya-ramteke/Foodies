import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../service1.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private some_name: Service1Service) {  }

  ngOnInit() { }

  random() {
    console.log("hello world");
    this.some_name.getRestaurants().subscribe(res => {
      console.log(res)
    })
  }
}
