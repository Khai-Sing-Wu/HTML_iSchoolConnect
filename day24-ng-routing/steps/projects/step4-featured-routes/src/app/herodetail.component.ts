import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "./hero.service";

@Component({
    selector: 'app-hero-detail',
    template: `
    <h2> {{ selectedHero.name }} </h2>
    <p>
        {{ selectedHero | json }}
    </p>
  <a [routerLink] = "['edithero',selectedHero.powerstats.power, selectedHero.name]">Edit {{ selectedHero.name }}</a>
  <br>
  <input min="0" max="100" type="range" [(ngModel)]="selectedHero.powerstats.power">
  <a [routerLink] = "['edithero',selectedHero.powerstats.power, selectedHero.name]">Set Power of {{ selectedHero.name }}</a>
  <hr>
  <router-outlet></router-outlet>
    `
})
export class HeroDetailComp { 
    selectedHero:any;
    constructor(private hs:HeroesService, private ar:ActivatedRoute){}
    ngOnInit(){
        this.selectedHero = this.hs.getSelectedHero(this.ar.snapshot.params['selectHeroId']);
    }
}