import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child.component';
/*
ViewChild
ViewChildren
 
ContentChild
ContentChildern
*/
@Component({
  selector: 'app-root',
  template : `
    <h1>Main Component : Power {{ apppower }}</h1>
    <button (click)="showHide()">Remove ViewChild Component</button>
    <br>
    <p>Buttons for ViewChild </p>
    <button (click)="increaseChildPower()">Increase Child Power</button>
    <button (click)="decreaseChildPower()">Decrease Child Power</button>
    <br>
    <p>Buttons for ViewChildren</p>
    <button (click)="increaseChildrenPower()">Increase Children Power</button>
    <button (click)="decreaseChildrenPower()">Decrease Children Power</button>
    <ol>
        <li> <app-child #viewchild1 *ngIf="show"></app-child> </li>
        <li> <app-child #viewchild2 *ngIf="show"></app-child> </li>
        <li> <app-child #viewchild3 *ngIf="show"></app-child> </li>
    </ol>

  `
})
export class AppComponent implements OnInit {
  title = 'steps';
  apppower = 0;
  show = true;
  @ViewChild(ChildComponent) cc1:any;
  @ViewChildren(ChildComponent) acs! : QueryList<ChildComponent>;
  constructor(){
    console.log("AppComponent's constructor was called");
  }
  ngOnInit(): void {
    this.apppower = 5;
    console.log("AppComponent's ngOnInit was called");
  }
  increaseChildPower(){
    this.cc1.increasePower();
  }
  increaseChildrenPower(){
    this.acs.forEach(ac=>console.log(ac.increasePower()));
  }
  decreaseChildPower(){
    this.cc1.decreasePower();
  }
  decreaseChildrenPower(){
    this.acs.forEach(ac=>console.log(ac.decreasePower()));
  }
  showHide(){
    this.show = !this.show;
  }
}
 