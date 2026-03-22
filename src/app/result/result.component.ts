import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [RouterLink],
  templateUrl: './result.component.html'
})
export class ResultComponent {
  cardImage: string;

  constructor() {
    const cardNumber = Math.floor(Math.random() * 21) + 1;
    this.cardImage = `img/${cardNumber.toString().padStart(2, '0')}.PNG`;
  }
}
