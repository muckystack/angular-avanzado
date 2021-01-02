import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public title: String;
  public titleSubs$: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getDataRoute().subscribe(({ title }) => {
      this.title = `Admin Pro - ${title}`;
    });
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
