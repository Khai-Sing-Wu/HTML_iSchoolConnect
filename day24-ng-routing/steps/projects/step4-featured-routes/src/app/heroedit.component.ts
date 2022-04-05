import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroedit',
  template: `
  <h2> Name : {{ heroEdit }}</h2>
  <h2> Power : {{ heroNewPower }}</h2>
  `,
  styles: []
})
export class HeroeditComponent implements OnInit {

  heroEdit:any;
  heroNewPower:any;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(){
    this.ar.params.subscribe((rparam:any)=>{
      this.heroNewPower = rparam['power'];
      this.heroEdit = rparam['hname'];
    })
  }

}
