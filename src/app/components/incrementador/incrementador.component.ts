import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input('value') progress:number = 40;
  @Input() btnClass:string = 'btn-primary';

  @Output('value') exitValue:EventEmitter<number> = new EventEmitter();

  // get getPorcent() {
  //   return `${this.progress}%`;
  // }

  changeValue(valor:number) {
    if(this.progress >= 100 && valor >= 0) {
      this.exitValue.emit(100);
      return this.progress = 100;
    }
    if(this.progress <= 0 && valor < 0) {
      this.exitValue.emit(0);
      return this.progress = 0;
    }
    this.progress = this.progress + valor;
    this.exitValue.emit(this.progress);
  }

  onchange(newValue:number) {
    if(newValue >= 100) {
      this.progress = 100;
    }else if(newValue <= 0) {
      this.progress = 0;
    }else {
      this.progress = newValue;
    }
    this.exitValue.emit(this.progress);
  }

}
