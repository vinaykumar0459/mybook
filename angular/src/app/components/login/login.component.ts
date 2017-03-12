import { Component, OnInit } from '@angular/core';
import { User } from './logininterface';
import { AppService } from '../../app.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public user : User;
 getusers = [];
  constructor(private _appservice:AppService) { }

  ngOnInit() {
    this.user = {
      username :'',
      password : '' 
    }
    this._appservice.getUsers()
      .subscribe(res => this.getusers = res);

  }
  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }

}
