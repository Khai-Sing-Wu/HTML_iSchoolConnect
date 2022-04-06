import { Component, OnInit } from '@angular/core';
import { HeroesService } from './hero.service';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movielist',
  template: `
  <table class='table table-striped tabled-bordered'>
    <thead>
      <tr> 
        <th>Sl</th>
        <th>Title</th>
        <th>Movie List</th>
        <th>More Details</th>
    </thead>
    <tbody>
      <tr *ngFor="let movie of movielist">
        <td> {{ movie.id }}</td>
        <td> {{ movie.title }}</td>
        <td> {{ movie.year }} </td>
        <td> <a [routerLink]= "['/moviedetail', movie.id]" >Click for detail</a></td>
      </tr>
    </tbody>  
  </table>
  <router-outlet></router-outlet>
  <a [routerLink]="['']"> Back to Master Page</a>
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
