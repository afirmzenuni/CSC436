import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-price',
  templateUrl: './flight-price.component.html',
  styleUrls: ['./flight-price.component.css']
})
export class FlightPriceComponent implements OnInit {
  title = 'Travel APP';
  result = 0;
  pass = 0;
  origin = '';
  destination = '';

  constructor() { }

  ngOnInit(): void {
  }


  calcPrice(): void {
    this.result = this.pass * 150;
  }
}

