import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './userinferface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public user: User;

  constructor() {
    
   }

  ngOnInit() {
    this.user = {
      username :'',
      email : '',
      password : '',
      confirmPassword : ''
    }
  }
  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
