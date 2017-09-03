import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  private url :string = 'https://api.github.com/search/users?q=';
constructor(private _http :Http){}

  getUserData(loginId :string){
    return this._http.get(this.url+loginId)
    .map(res  => res.json());
  }
}
