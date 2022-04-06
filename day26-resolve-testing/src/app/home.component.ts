import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template: `
    <h1>Home Component</h1>
    
    `
})
export class HomeComponent {

    apptitle:any;
    constructor(private ar:ActivatedRoute){

    }
    ngOnInit()
    {
        this.ar.data.subscribe(res=>{
            this.apptitle = res['apptitle'];
        })
    }
   
}