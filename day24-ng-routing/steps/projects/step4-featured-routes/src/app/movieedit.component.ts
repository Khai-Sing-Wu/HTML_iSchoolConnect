import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movieedit',
  template: `
    <h2>Title : {{ movieToEdit }}</h2>
    <h2>Director : {{ updatedDirector }}</h2>
  `,
  styles: []
})
export class MovieeditComponent implements OnInit {

  movieToEdit:any;
  updatedDirector:any;

  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe((rparams:any)=>{
      this.movieToEdit = rparams['title'];
      this.updatedDirector = rparams['director'];
    })
  }

}
