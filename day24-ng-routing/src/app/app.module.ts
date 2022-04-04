import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { AquamanComponent } from './aquaman.component';
import { WonderwomanComponent } from './wonderwoman.component';
import { FlashComponent } from './flash.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { HomeComp } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    BatmanComponent,
    SupermanComponent,
    AquamanComponent,
    WonderwomanComponent,
    FlashComponent,
    CyborgComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path : "", component : HomeComp, },
      { path : "batman", component : BatmanComponent, },
      { path : "batman/:qty/:ver", component : BatmanComponent, },
      { path : "superman", component : SupermanComponent },
      { path : "flash", component : FlashComponent, },
      { path : "wonderwoman", component : WonderwomanComponent , },
      { path : "aquaman", component : AquamanComponent, },
      { path : "cyborg", component : CyborgComponent, },
      { path : "**", component : NotfoundComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
