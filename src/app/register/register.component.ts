import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  countryDefaul =  'Việt Nam';
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Nhật Bản'},
    {id: 3, name: 'Mỹ'},
  ];
  isSame = true;

  register = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.register.get('email');
  }

  get password() {
    return this.register.get('password');
  }

  get confirm() {
    return this.register.get('confirm');
  }

  get age() {
    return this.register.get('age');
  }

  get gender() {
    return this.register.get('gender');
  }

  get phone() {
    return this.register.get('phone');
  }

  constructor() {
  }

  ngOnInit() {
  }

  change() {
    const confirm = this.confirm.value;
    if (confirm === this.password.value) {
      this.isSame = true;
      console.log(1);
    } else {
      this.isSame = false;
      console.log(1);
    }
  }

  onSubmit() {
    console.log(this.register.value);
  }
}
