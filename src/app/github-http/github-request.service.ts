import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
@Injectable()

export class GithubRequestService {

  result$

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get("https://api.github.com/users/leskeylevy?access_token=b182da05cda24004ea9e522d63544ac79defc478")
  }


}
