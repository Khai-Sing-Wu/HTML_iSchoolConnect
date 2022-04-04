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
    </thead>
    <tbody>
      <tr *ngFor='let hero of heroslist'>
        <td> {{ hero.sl }}</td>
        <td> {{ hero.title }}</td>
        <td> {{ hero.firstname + " " + hero.lastname}}</td>
      </tr>
    </tbody>
  </table>
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
