import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRequestService } from '../github-http/github-request.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result$;

  constructor(private http: HttpClient, private service: GithubRequestService) { }




  ngOnInit() {
    this.service.get().subscribe(
      data => {
        this.result$ = data
        console.log(data)
      }
    );
  }
}
