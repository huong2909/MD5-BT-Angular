import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
    password: new FormControl('', [Validators.required])
  });
  get email() {
    return this.login.get('email');
  }
  get password() {
    return this.login.get('password');
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login.value);
  }
}
