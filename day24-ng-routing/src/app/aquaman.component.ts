import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aquaman',
  template: `
    <h2>
      aquaman says hi
    </h2>
    
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur ea excepturi in. Tempore ullam explicabo nesciunt facere itaque! Tempore nisi eum autem et alias quae voluptatibus culpa magni ex!</p>

  `,
  styles: [
  ]
})
export class AquamanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
