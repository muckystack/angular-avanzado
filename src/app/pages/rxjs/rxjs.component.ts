import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit {

  constructor() {

    const obs$ = new Observable(observer => {
      let i = -1;
      const interval = setInterval(() => {
        
        i++;
        observer.next(i);

        if(i == 4) {
          clearInterval(interval);
          observer.complete();
        }
        if(i == 2) {
          clearInterval(interval);
          observer.error('i llego al valor de 2');
        }

      }, 1000);
    });

    obs$.subscribe(
      value => console.log('Subs: ', value),
      error => console.warn(error),
      () => console.info('Terminado')
    );

  }

  ngOnInit(): void {
  }

}
