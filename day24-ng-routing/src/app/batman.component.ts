import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <h1>
      Batman says hi.
    </h1>
    <h2> Quantity : {{ quantity || 0 }} </h2>
    <h2> Version : {{ version || 0 }} </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur ea excepturi in. Tempore ullam explicabo nesciunt facere itaque! Tempore nisi eum autem et alias quae voluptatibus culpa magni ex!</p>

  `,
  styles: [
  ]
})
export class BatmanComponent implements OnInit {
  quantity:any;
  version :any;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.quantity = this.ar.snapshot.params['qty'];
    this.version = this.ar.snapshot.params['ver'];
  }

}
