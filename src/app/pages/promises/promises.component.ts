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

    // this.getUsers();
    this.getUsers().then(users => {
      console.log(users);
    });

    // const promise = new Promise((resolve, reject) => {

    //   if(false) {
    //     resolve('Hola mundo');
    //   }else {
    //     reject('Algo salio mal');
    //   }
      
    // });

    // promise.then((msg) => {
    //   console.log(msg);
    // }).catch(error => {
    //   console.log('error en mi promesa', error);
      
    // })

    // console.log('Fin del init');

  }

  // reqres.in/api/users

  // getUsers() {

  //   fetch('https://reqres.in/api/users')
  //     .then(resp => {
  //       resp.json().then(body => console.log(body))
  //     });
  
  // }
 
  getUsers() {

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body));
    });

  }

}
