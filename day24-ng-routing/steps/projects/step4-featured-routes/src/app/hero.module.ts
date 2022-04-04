import { NgModule } from "@angular/core";
import { HeroaddComponent } from "./heroadd.component";
import { HeroeditComponent } from "./heroedit.component";
import { HerolistComponent } from "./herolist.component";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeroesService } from "./hero.service";

@NgModule({
    declarations:[HeroaddComponent, HeroeditComponent, HerolistComponent , HeroComponent ],
    imports:[BrowserModule,RouterModule.forChild([
        { path : "hero" , component:HeroComponent },
        { path : "heroes" , component:HerolistComponent },
        { path : "addhero" , component:HeroaddComponent },
        { path : "edithero" , component:HeroeditComponent }
    ])],
    exports:[HeroComponent, HeroaddComponent, HeroeditComponent, HerolistComponent],
    providers : [HeroesService]
})
export class HeroModule{

}