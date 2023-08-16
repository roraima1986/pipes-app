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

  //i18n Plural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  //keyValue
  public person = {
    name: 'Fernando',
    age:36,
    address: 'Otawa, Canada'
  }

}
