import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class UserProfileService {
private url :string ="https://api.github.com/users/";
  constructor(private _http :Http) { }

  getUserProfileData(user :string){
    return this._http.get(this.url+user+'/repos')
    .map(res => res.json());
  }

  getUserFollowers(user :string){
    return this._http.get(this.url+user+'/followers')
    .map(res =>res.json());
  }
  getUserFollowing(user :string){
    return this._http.get(this.url+user+'/subscriptions')
    .map(res =>res.json());
  }
}
