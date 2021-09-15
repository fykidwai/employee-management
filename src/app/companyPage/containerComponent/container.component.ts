import { Component } from '@angular/core';

@Component({
  selector: 'container-component',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.css'],
  styles: ['b {color: green}', 'p { color: aqua }'],
})
export class ContainerComponent {
  companyName: string = 'SpringPeople';
  userName: string = 'Mayank Gupta';
  currentTime: string = '';

  constructor() {
    setInterval(() => this.getTime(), 1000);
  }

  getTime() {
    this.currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
  }
}
