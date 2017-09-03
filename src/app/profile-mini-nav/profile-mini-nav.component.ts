import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-mini-nav',
  templateUrl: './profile-mini-nav.component.html',
  styleUrls: ['./profile-mini-nav.component.css'],
  inputs :['repo','followers','following']
})
export class ProfileMiniNavComponent implements OnInit {
  public repo :any = {};
  public followers :any = {};
  public following :any = {};
  constructor() { }

  ngOnInit() {
  }

}
