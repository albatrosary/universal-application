import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Issue Tracker</h1>
<ul>
  <li><a routerLink="home" routerLinkActive="active">Home</a></li>
</ul>
<router-outlet></router-outlet>
`,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
