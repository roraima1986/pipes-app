import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {
  public isUpperCase:boolean = false;

  toggleUperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }
}
