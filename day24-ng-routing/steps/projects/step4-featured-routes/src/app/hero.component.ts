import { Component, OnInit } from '@angular/core';
import { HeroesService } from './hero.service';

@Component({
  selector: 'app-heroadd',
  template: `
    
  `,
  styles: []
})
export class HeroComponent implements OnInit {

  constructor(private hs:HeroesService) { }

  ngOnInit() {
  }

}
