import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>Routing 101 : {{ version }} </h1>
   <hr> 
   <!-- 
   <ul>
   <li> <a href='batman'>Batman</a></li>
   <li> <a href=''> Home</a> </li>
   <li> <a href='flash'>Flash</a> </li>
   <li> <a href='wonderwoman'>Wonderwoman</a>  </li>
   <li> <a href='cyborg'> Cyborg </a> </li>
   <li> <a href='hulk'>Hulk</a></li>
   </ul>
   -->

   <!-- 
   <ul>
   <li> <a routerLink='batman'>Batman</a></li>
   <li> <a routerLink=''> Home</a> </li>
   <li> <a routerLink='flash'>Flash</a> </li>
   <li> <a routerLink='wonderwoman'>Wonderwoman</a>  </li>
   <li> <a routerLink='cyborg'> Cyborg </a> </li>
   <li> <a routerLink='hulk'>Hulk</a></li>
   </ul>
   -->
  <input #qty type='range' (input)='setQuantity = qty.value'>

   <ul>
    <li> <a [routerLink]="['']"> Home</a> </li>
    <li> <a [routerLink]="['batman',]">Batman No Params</a> </li>
    <li> <a [routerLink]="['batman',setQuantity,version]">Batman</a> </li>
    <li> <a [routerLink]="['flash']">Flash</a> </li>
    <li> <a [routerLink]="['wonderwoman']">Wonderwoman</a> </li>
    <li> <a [routerLink]="['cyborg']"> Cyborg </a> </li>
    <li> <a [routerLink]="['hulk']">Hulk</a> </li>
   </ul>
   
   <router-outlet></router-outlet> 
  `,
  styles: []
})
export class AppComponent {
  title = 'steps';
  version=0;
  setQuantity = '0';
  constructor(){
    this.version = Math.round(Math.random() * 1000);
  }
}
