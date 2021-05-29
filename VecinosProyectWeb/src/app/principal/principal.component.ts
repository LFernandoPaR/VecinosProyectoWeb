import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [AuthService],
})
export class PrincipalComponent implements OnInit {

  constructor(private authSvc: AuthService ) { }

  // tslint:disable-next-line:typedef
  async ngOnInit() {
    const user = await this.authSvc.getcurrentuser();
    if (user){
console.log('user --- ', user);
    } else {
      console.log('errors');
    }
  }

}
