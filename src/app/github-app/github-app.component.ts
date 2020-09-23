import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery: string;
  public githubProfile: any;
  public githubRepos: any[];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  public searchUser() {
    this.githubService.gitProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data
    })

    // get github repos
    this.githubService.gitRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos = data
    })
  }

}
