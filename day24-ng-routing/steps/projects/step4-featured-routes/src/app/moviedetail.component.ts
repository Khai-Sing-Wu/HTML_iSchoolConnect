import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "./movie.service";

@Component({
    selector: 'app-movie-detail',
    template: `
    <h2> {{ selectedMovie.name }} </h2>
    <p>
        {{ selectedMovie | json }}
    </p>
    <a [routerLink] = "['editmovie',selectedMovie.title, selectedMovie.director]">Edit {{ selectedMovie.title }}</a>
    <br>
    <input type='text' [(ngModel)]='selectedMovie.director'>
    <a [routerLink] = "['editmovie',selectedMovie.title, selectedMovie.director]"> Update director of {{ selectedMovie.title }} </a>
    <hr>
    <router-outlet></router-outlet>
    <a [routerLink]="['']"> Back to Master Page</a>
    `
})

export class MovieDetailComponent {
    selectedMovie:any;
    constructor(private ms:MovieService, private ar:ActivatedRoute){}
    ngOnInit(){
        this.selectedMovie = this.ms.getSelectedMovie(this.ar.snapshot.params['selectMovieId']);
    }
}