import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-master',
  template: `
    <h1> {{ apptitle }} </h1>
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
            <a [routerLink] = "['/hero', hero.id]" >Click for detail </a>
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
  apptitle:any;
  constructor(private hs:HeroesService, private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.herolist = this.hs.getHeroes();
    this.ar.data.subscribe( (res:any) => {
      this.apptitle = res[this.apptitle];
    })
  }
}
