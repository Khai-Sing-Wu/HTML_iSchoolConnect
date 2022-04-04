import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template : `
    <h2> Name : {{ heroToEdit }}</h2>
    <h2> Power : {{ herosNewPower }}</h2>
    `
})
export class HeroEditComp{
    heroToEdit:any;
    herosNewPower :any;
    constructor(private ar:ActivatedRoute){}

    ngOnInit(){
        this.ar.params.subscribe( rparam => {
            this.herosNewPower = rparam['power'];
            this.heroToEdit = rparam['hname'];
        });
    }
}