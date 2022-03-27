import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { footerComp } from './footer.component';
import { headerComp } from './header.component';
import { mainComp } from './main.component';
import { productComp } from './product.component';

@NgModule({
  declarations: [AppComponent, headerComp, productComp, footerComp,mainComp],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
