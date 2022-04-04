import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-master',
  template: `
  <input [(ngModel)]="filterby" type='search'>
    <table>
      <thead>
        <tr> 
          <th>Sl</th>
          <th>Title</th>
          <th>Full Name</th>
          <th>More Detail</th>
      </thead>
      <tbody>
        <tr *ngFor="let hero of herolist | heroFilter: filterby">
          <td> {{ hero.id }}</td>
          <td> {{ hero.name }}</td>
          <td> {{ hero.biography['full-name'] }}</td>
          <td> 
            <a [routerLink] = "['hero',{username:'khai'}]" [queryParams]="{ hid: hero.id, filterOn: filterby}" >Click for detail </a>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  filterby:any='';
  herolist: any;
  constructor(private hs:HeroesService, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.herolist = this.hs.getHeroes();
    this.filterby = this.ar.snapshot.queryParams['filterOn'];
  }
}
