import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Travel APP';
  result:number = 0;
  pass:number = 0;
  origin:string = '';
  destination:string = '';

  calcPrice(): void {
    this.result = this.pass * 150;
  }
}
