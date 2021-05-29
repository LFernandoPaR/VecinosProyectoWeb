import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;

  constructor(public afAuth: AngularFireAuth) { }

  // tslint:disable-next-line:typedef
  async login1( email: string, password: string ){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch (error){
        console.log(error);
    }
  }
  // tslint:disable-next-line:typedef
  async register(email: string, password: string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // tslint:disable-next-line:typedef
  async logout(){
    try {
      await this.afAuth.signOut(); 
    } catch (error) {
      console.log(error);
    }
  }
  // tslint:disable-next-line:typedef
  getcurrentuser(){
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
