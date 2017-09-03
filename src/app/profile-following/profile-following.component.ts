import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-following',
  templateUrl: './profile-following.component.html',
  styleUrls: ['./profile-following.component.css'],
  inputs :['following']
})
export class ProfileFollowingComponent implements OnInit {
following :any ={};
  constructor() { }

  ngOnInit() {
  }

}
