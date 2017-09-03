import { Component, OnInit } from '@angular/core';
import {Repo} from '../models/repo';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  inputs : ['repo']
})
export class RepoComponent implements OnInit {
  public repo :Repo;
  constructor(private _router :Router) { }

  ngOnInit() {
  }
  onSelect(loginId :string) {
    this._router.navigate(['/users',loginId]);
  }
}
