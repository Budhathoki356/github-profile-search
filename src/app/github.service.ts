import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) {

  }

  // for github profile
  public gitProfile(searchQuery):Observable<any> {
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`;
    return this.http.get<any>(dataUrl);
  }
  // for github repos
  public gitRepos(searchQuery):Observable<any> {
    let dataUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${environment.CLIENT_ID}&client_secret=${environment.CLIENT_SECRET}`;
    return this.http.get<any>(dataUrl);
  }
}
