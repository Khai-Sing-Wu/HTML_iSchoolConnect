import { NgModule } from "@angular/core";
import { MovieaddComponent } from "./movieadd.component";
import { MovieeditComponent } from "./movieedit.component";
import { MovielistComponent } from "./movielist.component";
import { RouterModule } from "@angular/router";
import { MovieComponent } from "./movie.component";
import { BrowserModule } from "@angular/platform-browser";
import { MovieService } from "./movie.service";
import { MovieDetailComponent } from "./moviedetail.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[MovieComponent, MovieaddComponent, MovieeditComponent,MovieDetailComponent, MovielistComponent],
    imports:[BrowserModule,FormsModule,RouterModule.forChild([
        { path : "movie" , component:MovieComponent},
        { path : "movies" , component:MovielistComponent },
        { path : "addmovie" , component:MovieaddComponent },
        { path : "moviedetail/:selectMovieId", component:MovieDetailComponent, children :[
            { path : "editmovie/:title/:director" , component:MovieeditComponent }
        ]}
    ])],
    providers: [MovieService],
    exports:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent]
})
export class MovieModule{

}