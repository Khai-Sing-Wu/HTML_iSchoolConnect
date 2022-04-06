import { NgModule } from "@angular/core";
import { HeroaddComponent } from "./heroadd.component";
import { HeroeditComponent } from "./heroedit.component";
import { HerolistComponent } from "./herolist.component";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeroesService } from "./hero.service";
import { HeroDetailComp } from "./herodetail.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[HeroaddComponent, HeroeditComponent, HerolistComponent , HeroComponent, HeroDetailComp ],
    imports:[
    BrowserModule, CommonModule , FormsModule, RouterModule.forChild([
        { path : "hero" , component:HeroComponent} ,
        { path : "heroes" , component:HerolistComponent},
        { path : "addhero" , component:HeroaddComponent },
        { path: "herodetail/:selectHeroId", component: HeroDetailComp, children :[
        { path : "edithero/:power/:hname" , component:HeroeditComponent}]}                    
        ])
    ],
    exports:[HeroComponent, HeroaddComponent, HeroeditComponent, HeroDetailComp, HerolistComponent],
    providers : [HeroesService]
})
export class HeroModule{

}