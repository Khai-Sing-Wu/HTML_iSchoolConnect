import { Component, OnInit } from '@angular/core';
import { HeroesService } from './hero.service';

@Component({
  selector: 'app-herolist',
  template: `
   <table>
    <thead>
      <tr> 
        <th>Sl</th>
        <th>Title</th>
        <th>Full Name</th>
        <th> More Details </th>
    </thead>
    <tbody>
      <tr *ngFor='let hero of heroslist'>
        <td> {{ hero.id }}</td>
        <td> {{ hero.name }}</td>
        <td> {{ hero.biography['full-name']}}</td>
        <td>
        <a [routerLink] = "['herodetail', hero.id]" >Click for detail </a>
        </td>
      </tr>
    </tbody>
  </table>
  <router-outlet></router-outlet>
  
  `,
  styles: []
})
export class HerolistComponent implements OnInit {
  heroslist:any;
  constructor(private hs:HeroesService) { }

  ngOnInit() {
    this.heroslist = this.hs.getHeroes();
  }
}
