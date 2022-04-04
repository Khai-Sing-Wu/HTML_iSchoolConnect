import { Component, OnInit } from '@angular/core';
import { HeroesService } from './hero.service';

@Component({
  selector: 'app-movielist',
  template: `
  <table>
    <thead>
      <tr> 
        <th>Sl</th>
        <th>Title</th>
        <th>MoVie List</th>
    </thead>
    <tbody>
      <tr *ngFor="let hero of herolist">
        <td> {{ hero.sl }}</td>
        <td> {{ hero.title }}</td>
        <td>
          <ul> 
            <li *ngFor='let movie of hero.movieslist' > {{ movie.title }} </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: []
})
export class MovielistComponent implements OnInit {
  herolist :any;
  constructor(private hs:HeroesService) { }

  ngOnInit() {
    this.herolist = this.hs.getHeroes();
  }

}
