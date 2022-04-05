import { Component, OnInit } from '@angular/core';
import { HeroesService } from './hero.service';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movielist',
  template: `
  <table>
    <thead>
      <tr> 
        <th>Sl</th>
        <th>Title</th>
        <th>Movie List</th>
    </thead>
    <tbody>
      <tr *ngFor="let movie of movielist">
        <td> {{ movie.id }}</td>
        <td> {{ movie.title }}</td>
        <td> {{ movie.year }} </td>
      </tr>
    </tbody>  
  </table>
  `,
  styles: []
})
export class MovielistComponent implements OnInit {
  movielist :any;
  constructor(private ms:MovieService) { }

  ngOnInit() {
    this.movielist = this.ms.getMovies();
  }
}
