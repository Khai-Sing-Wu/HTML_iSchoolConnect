import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FootComp } from './footer.component';
import { HeadComp } from './header.component';
import { MainComp } from './main.component';
import { Product1Comp } from './product1.component';
import { Product2Comp } from './product2.component';
import { Product3Comp } from './product3.component';
import { Product4Comp } from './product4.component';



@NgModule({
  declarations: [ AppComponent, HeadComp, FootComp, MainComp ,Product1Comp, Product2Comp, Product3Comp, Product4Comp],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
