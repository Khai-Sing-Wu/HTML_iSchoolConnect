import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li> Title : {{ title }} </li>
  <li> User : {{ username }} </li>
  <li> Age : {{ userage }} </li>
  </ul>
  `
})
export class AppComponent {
  title = 'steps';
  username='khai';
  userage = 20;

  increaseAge(){
    this.userage +=1;
  }
}
