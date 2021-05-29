import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private authSvc: AuthService) { }

  ngOnInit(): void {
  }

 // tslint:disable-next-line:typedef
 onRegister(){
    const {email, password } = this.registerForm.value;
    this.authSvc.register(email, password);
  }
}
