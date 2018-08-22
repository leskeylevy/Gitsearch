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
    console.log(input.value)
    this.http.get('https://api.github.com/users/' + input.value + '/repos?access_token=b182da05cda24004ea9e522d63544ac79defc478').subscribe(result => {
      this.search$ = result;
      console.log(this.search$)
    })
  }
  ngOnInit() {
  }

}
