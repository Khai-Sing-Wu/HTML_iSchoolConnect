import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash',
  template: `
  <h1>
    Flash says hi.
  </h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur ea excepturi in. Tempore ullam explicabo nesciunt facere itaque! Tempore nisi eum autem et alias quae voluptatibus culpa magni ex!
  </p>

  `,
  styles: [
  ]
})
export class FlashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
