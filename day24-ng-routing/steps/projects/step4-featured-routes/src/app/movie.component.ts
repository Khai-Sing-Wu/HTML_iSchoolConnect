import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
  <h2> Movies database</h2>
  <li> <a [routerLink]="['/movies']">Get Movie List</a> </li>
  <router-outlet></router-outlet>
  <a [routerLink]="['']">Back to Master Page</a>
  `,
  styles: []
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
