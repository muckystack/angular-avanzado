import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.components.css']
})
export class NopagefoundComponent implements OnInit {
  
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
