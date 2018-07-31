import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  status: boolean;
  
  getUserStatus() {
    this.status = true;
  }

  greetPerson() {
    alert('Hi');
  }

  onSubmit() {
    console.log('submitted');
  }
}
