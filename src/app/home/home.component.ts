import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  message: string = '';
  receiveMessage(message: string) {
    this.message = message;
    console.log(this.message)
  }
}
