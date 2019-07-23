import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimations ]
})
export class AppComponent {
  title = 'r-w';
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
