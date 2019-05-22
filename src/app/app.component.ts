import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  query,
  transition,
  animateChild,
  group
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

export const slideInAnimation =
  trigger('routeAnimations', [
  ]);


@Component({
  selector: 'app-root',
  template: `
  <div [@routeAnimations]="prepareRoute(outlet)" >
    <router-outlet #outlet="outlet"></router-outlet>
  </div>
`,
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
