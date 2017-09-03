import { Component, OnInit } from '@angular/core';
import {Language} from '../models/languages';
import {RepoService} from '../services/repo.service';
@Component({
  selector: 'app-languages-side',
  templateUrl: './languages-side.component.html',
  styleUrls: ['./languages-side.component.css']
})
export class LanguagesSideComponent implements OnInit {
public languages :Language[] =[];
  constructor(private _service :RepoService) { }

  ngOnInit() {
    this.languages = [new Language("Java"),new Language("Python"),new Language("PHP"),new Language("Javascript")];
    for(let entry of this.languages){
      this._service.getRepoDetails(entry.title)
      .subscribe(res =>entry.repoCount=res.total_count);
    }
  }

}
