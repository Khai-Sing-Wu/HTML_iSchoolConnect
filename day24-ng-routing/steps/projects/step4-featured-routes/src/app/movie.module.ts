import { NgModule } from "@angular/core";
import { MovieaddComponent } from "./movieadd.component";
import { MovieeditComponent } from "./movieedit.component";
import { MovielistComponent } from "./movielist.component";
import { RouterModule } from "@angular/router";
import { MovieComponent } from "./movie.component";
import { BrowserModule } from "@angular/platform-browser";
import { MovieService } from "./movie.service";

@NgModule({
    declarations:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent],
    imports:[BrowserModule,RouterModule.forChild([
        { path : "movie" , component:MovieComponent, children : [
        { path : "movies" , component:MovielistComponent },
        { path : "addmovie" , component:MovieaddComponent },
        { path : "editmovie" , component:MovieeditComponent }, 
        ]}
    ])],
    providers: [MovieService],
    exports:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent]
})
export class MovieModule{

}