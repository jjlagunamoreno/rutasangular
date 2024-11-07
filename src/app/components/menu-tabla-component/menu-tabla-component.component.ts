import { Component } from '@angular/core';
@Component({
  selector: 'app-menu-tabla-component',
  templateUrl: './menu-tabla-component.component.html',
  styleUrl: './menu-tabla-component.component.css'
})
export class MenuTablaComponentComponent {
  public numerosRandom: Array<number>;
  constructor() {
    this.numerosRandom = new Array<number>();
    for (var i = 1; i <= 5; i++) {
      let random = Math.floor((Math.random() * 100)) + 1;
      this.numerosRandom.push(random);
    }
  }
}