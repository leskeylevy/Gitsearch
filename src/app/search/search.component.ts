import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search$;

  constructor(private http: HttpClient) { }

  searchgh(input) {
    this.http.get('https://api.github.com/search/users?q=' + input.value).subscribe(result => {
      this.search$ = result;
      console.log(result)
    })
  }
  ngOnInit() {
  }

}
