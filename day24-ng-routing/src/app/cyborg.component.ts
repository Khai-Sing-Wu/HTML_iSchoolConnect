import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyborg',
  template: `
  <h1>
  Cyborg says hi.
</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur ea excepturi in. Tempore ullam explicabo nesciunt facere itaque! Tempore nisi eum autem et alias quae voluptatibus culpa magni ex!</p>

  `,
  styles: [
  ]
})
export class CyborgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
