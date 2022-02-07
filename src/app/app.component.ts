import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  subscription;
  constructor(router: Router) {
    this.subscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  title = 'myWebsite';
}
