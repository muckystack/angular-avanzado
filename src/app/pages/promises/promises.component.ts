import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const promise = new Promise((resolve, reject) => {

      if(false) {
        resolve('Hola mundo');
      }else {
        reject('Algo salio mal');
      }
      
    });

    promise.then((msg) => {
      console.log(msg);
    }).catch(error => {
      console.log('error en mi promesa', error);
      
    })

    console.log('Fin del init');

  }

}
