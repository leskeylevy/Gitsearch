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
    this.service.repos()
    this.response = this.service.response
    // console.log(response.login);

    // this.http.get('https://api.github.com/users/leskeylevy/repos?access_token=b182da05cda24004ea9e522d63544ac79defc478').subscribe(
    //   data => {
    //     this.repos$ = data
    //     console.log(data[1].name)
    // console.log(data.data[1].id);

  }

}
