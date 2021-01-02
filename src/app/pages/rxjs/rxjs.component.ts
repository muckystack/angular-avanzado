import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit {
  constructor() {
    // this.returnObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   value => console.log('Subs: ', value),
    //   error => console.warn(error),
    //   () => console.info('Terminado')
    // );

    this.returnInterval().subscribe(console.log);
  }

  ngOnInit(): void {}

  returnInterval(): Observable<number> {
    return interval(1000).pipe(
      take(10),
      map((valor) => {
        return valor + 1;
      }),
      filter(valor => (valor % 2 === 0) ? true: false)
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
  }
}
