import { Component, OnInit,OnDestroy, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare const vidyard: any; // Vidyard global object

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent  {
  @Output() messageEvent = new EventEmitter<string>();

constructor(){
   

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://play.vidyard.com/embed/v4.js';
  document.head.appendChild(script);

 
}

showDialpad:boolean=false
phoneNumber: string = '';

appendToPhoneNumber(digit: string) {
  this.phoneNumber += digit;
}

clearPhoneNumber() {
  this.phoneNumber = '';
}
sendMessage() {
  this.messageEvent.emit('Hello from child component!');
  console.log(this.messageEvent)
}

callPhoneNumber() {
  // Implement the logic to initiate a call with the current phone number
  // For mobile, you might need to use platform-specific libraries or APIs
}

// isVideoReady = false;

// ngOnInit() {
//   setTimeout(() => {
//     this.isVideoReady = true;
//   }, 1000); 
// }

}
