import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRequestService } from '../github-http/github-request.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GithubRequestService]
})
export class HomeComponent implements OnInit {

  response;

  constructor(private http: HttpClient, private service: GithubRequestService) { }




  ngOnInit() {
    this.service.githubRequest()
    this.response = this.service.response
    // console.log(response.login);
  }

}
