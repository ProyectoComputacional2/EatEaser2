import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.email = "";
    this.password = "";
    this.confirmPassword = "";
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
