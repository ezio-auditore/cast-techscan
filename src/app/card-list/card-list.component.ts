import { Component, OnInit } from '@angular/core';
import {MainCard} from '../models/mainCard';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
public cardList :MainCard[];
  constructor() { }

  ngOnInit() {
    this.cardList = [new MainCard("java","Java","java"),new MainCard("javascript","Javascript","javascript"),new MainCard("python","Python","python"),new MainCard("php","Php","php")];
  }

}
