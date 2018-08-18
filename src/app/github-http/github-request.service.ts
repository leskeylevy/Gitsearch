import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Return } from '../return'
@Injectable()

export class GithubRequestService {

  response: Return;

  constructor(private http: HttpClient) {
    this.response = new Return("", "", "")
  }

  githubRequest() {

    interface ApiResponse {
      login: string;
      avatar_url: any;
      repo: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/leskeylevy?access_token=b182da05cda24004ea9e522d63544ac79defc478").toPromise().then(response => {
        console.log(response.login)
        this.response.login = response.login
        this.response.avatar_url = response.avatar_url
        this.response.repo = response.repo


        resolve()
      },
        error => {
          this.response.login = "leskeylevy"
          reject(error)
        }
      )

    })
    return promise

  }


}
