import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {
public isLogged = false;
public user: any;
  LoginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService) { }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    this.user = await this.authSvc.getcurrentuser();
    if (this.user){
      this.isLogged = true;
      console.log('user --- ', this.user);
    } else {
      console.log('errors');
    }
  }

  // tslint:disable-next-line:typedef
  onLogin(){
    const {email, password} = this.LoginForm.value;
    this.authSvc.login1(email, password);
  }

}
