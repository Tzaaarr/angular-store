import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // Card
  @Input()
  gameCover: string = ""
  // Label
  @Input()
  gameLabel: string = ""
  // Price
  @Input()
  gameType: string = ""
  @Input()
  gamePrice: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
