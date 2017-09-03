import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/users.service';
import {UserProfileService} from '../services/user-profile.service';
import {User} from '../models/user';
import {Router} from  '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user :any ={};
user_repos :any[] =[];
user_star_repos :any[] =[];
user_followers :any[] =[];
user_following :any[] =[];
repo : any = {"isActive":true};
followers : any = {"isActive":false};
following : any = {"isActive":false};
stars : any = {"isActive":false};
  constructor(private route :ActivatedRoute,private _userService :UsersService, private _router :Router,private _profileservice :UserProfileService) { }

  ngOnInit() {
    let userName= this.route.snapshot.params['loginId'];
    this._userService.getUserData(userName)
    .subscribe(user =>{this.user = user.items[0];
      this.getAllRepoByUser(user.items[0]);
      this.getAllFollowers(user.items[0]);
      this.getAllSubscriptions(user.items[0]);
    });

  }
getAllRepoByUser(user :any){
    //this._router.navigate(['/users/:loginId/repos',loginId]);
    this._profileservice.getUserProfileData(user.login)
    .subscribe(userProfile =>{this.user_repos = userProfile});

    console.log(this.user_repos.length);
}
getAllFollowers(user :any){
  this._profileservice.getUserFollowers(user.login)
  .subscribe(userProfile =>{this.user_followers = userProfile});
}
getAllSubscriptions(user :any){
  this._profileservice.getUserFollowing(user.login)
  .subscribe(userProfile =>{this.user_following = userProfile});
}
showAllRepoByUser(){}
}
