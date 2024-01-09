import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  // Background
  @Input()
  photoCover:string=""

  // Date
  @Input()
  cardDate:string=""

  // Title
  @Input()
  cardTitle:string=""

  // Description
  @Input()
  cardDescription:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
