import { Component, OnInit } from '@angular/core';
import {MainCard} from '../models/mainCard';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  inputs :['card']
})
export class MainCardComponent implements OnInit {
public card :any;
  constructor(private router :Router) {


  }
onSelect(card){
  this.router.navigate(['/repo',card.url])
}
  ngOnInit() {
    // let obj :any = {iconClass:"java",title:"Java"};
    // this.card = new MainCard("java","Java");
    // console.log(this.card);
  }

}
