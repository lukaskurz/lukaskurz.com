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
    transition('greeting => about', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '100vh' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('600ms cubic-bezier(.49,-0.01,.1,.69)', style({ top: '-100vh' }))
        ]),
        query(':enter', [
          animate('600ms cubic-bezier(.49,-0.01,.1,.69)', style({ top: '0vh' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('about => greeting', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '-100vh' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms cubic-bezier(.49,-0.01,.1,.69)', style({ top: '100vh' }))
        ]),
        query(':enter', [
          animate('300ms cubic-bezier(.49,-0.01,.1,.69)', style({ top: '0vh' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
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
