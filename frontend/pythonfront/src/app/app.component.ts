import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChildrenOutletContexts, Router, RouterOutlet } from '@angular/router';
import { fader } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader],
})
export class AppComponent {

  title = 'pythonfront';
  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts
  ) {
  }

  prepareRoute(outlet : RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  ngOnInit() {
  }
}
