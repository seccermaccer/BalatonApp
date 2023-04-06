import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {IsLoggedInPipe} from "../../pipe/is-logged-in.pipe";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private auth: AngularFireAuth) {
    this.auth.onAuthStateChanged(user => {
      this._isLoggedIn.next(!!user);
    });
  }

  login(email: string,password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  signUp(email: string,password: string){
    return this.auth.createUserWithEmailAndPassword(email,password)
  }

  isLoggedIn(): boolean {
    let user = this.auth.currentUser;
    return !!user;
  }

  logout(){
    return this.auth.signOut();
  }

  isUserLoggedIn(){
    return this.auth.user;
  }
}
