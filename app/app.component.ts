import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  status: boolean;
  posts: object[];
  user = {
    username: '',
    password: ''
  }
  
  getUserStatus() {
    this.status = true;
  }

  greetPerson() {
    alert('Hi');
  }

  onSubmit(theForm: NgForm) {
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(this.user);
  }
}