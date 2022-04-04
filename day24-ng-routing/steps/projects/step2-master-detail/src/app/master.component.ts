import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-master',
  template: `
    <table>
      <thead>
        <tr> 
          <th>S1</th>
          <th>Title</th>
          <th>Full Name</th>
          <th>More Detail</th>
      </thead>
      <tbody>
        <tr *ngFor='let hero of herolist'>
          <td> {{ hero.id }}</td>
          <td> {{ hero.name }}</td>
          <td> {{ hero.biography['full-name'] }}</td>
          <td> 
            <a [routerLink] = "['hero', hero.id]" >Click for detail </a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  herolist: any;
  constructor(private hs:HeroesService) { }

  ngOnInit(): void {
    this.herolist = this.hs.getHeroes();
  }
}
