import { Component, OnInit , Input} from '@angular/core';
import {RepoService} from '../services/repo.service';
import {ActivatedRoute} from '@angular/router';
import {Repo} from '../models/repo';
@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
repoList : Repo[] = [];
totalCount :number;
p :number =1;
  constructor(private _repoService :RepoService,private route :ActivatedRoute) {

   }

  ngOnInit() {
    let repoType= this.route.snapshot.params['repoType'];
    this._repoService.getRepoDetails(repoType)
    .subscribe(repo =>{this.repoList = repo.items as Repo[];
      this.totalCount = repo.total_count;
    });

  }


}
