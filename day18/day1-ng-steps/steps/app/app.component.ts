import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-head></app-head>
  <app-main></app-main>
  <app-footer></app-footer>

  `
})
export class AppComponent {
  title = 'steps';
}
