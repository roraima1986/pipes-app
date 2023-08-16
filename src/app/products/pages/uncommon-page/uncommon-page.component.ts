import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {
  //i18n Select
  public name:string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  };

  changeClient(){
    this.name = 'Melissa';
    this.gender = 'female';
  }
}
