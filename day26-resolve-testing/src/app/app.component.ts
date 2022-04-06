import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Heroes List</h1>
    <hr>
    <ul>
      <li><a [routerLink]="['']"> Home</a></li>
      <li><a [routerLink]="['list']"> Hero list</a></li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'step2-master-detail';
}
