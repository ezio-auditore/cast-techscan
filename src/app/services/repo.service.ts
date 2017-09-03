import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RepoService {

private _url :string = "https://api.github.com/search/repositories?q=language:";
  constructor( private _http :Http) { }
    getRepoDetails(repoType :string){
      return this._http.get(this._url+repoType+'&order=desc')
      .map(res =>res.json());
    }
}
