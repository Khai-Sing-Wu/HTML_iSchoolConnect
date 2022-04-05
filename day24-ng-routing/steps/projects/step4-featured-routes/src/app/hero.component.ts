import { Component, OnInit } from '@angular/core';
import { HeroesService } from './hero.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <h2>Hero's database</h2>
    <ul>
    <li> <a [routerLink]="['heroes']">Get Hero List</a> </li>
    </ul>
    <router-outlet></router-outlet>
    <a [routerLink]="['']">Back to Master Page</a>
  `,
  styles: []
})
export class HeroComponent implements OnInit {

  constructor(private hs:HeroesService) { }

  ngOnInit() {
  }

}
