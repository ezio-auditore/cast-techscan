import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css'],
  inputs :['follower']
})
export class ProfileFollowersComponent implements OnInit {
follower :any = {}
  constructor() { }

  ngOnInit() {
  }

}
