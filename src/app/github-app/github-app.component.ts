import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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

  constructor(
    private ngxSpinner: NgxSpinnerService,
    private githubService: GithubService) { }

  ngOnInit(): void {
    this.ngxSpinner.show();

    setTimeout(()=>{
      this.ngxSpinner.hide()
    },1000)
  }

  public searchUser() {
    this.ngxSpinner.show()
    this.githubService.gitProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data
    })

    // get github repos
    this.githubService.gitRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos = data
      this.ngxSpinner.hide()
    })
  }

}
