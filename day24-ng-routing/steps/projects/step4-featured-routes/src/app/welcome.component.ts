import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <h2>Welcome to the Database</h2>
    <br>
    <ul>
    <li> <a [routerLink]="['hero']">Heroes</a> </li>
    <li> <a [routerLink]="['movie']">Movies</a> </li>
    </ul>
    
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
