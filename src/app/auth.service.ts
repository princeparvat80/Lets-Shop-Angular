import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
     private afauth: AngularFireAuth,
     private route: ActivatedRoute,
     private UserService: UserService) { 
     this.user$=afauth.authState; }

  login(){
    let returnUrl=this.route.snapshot.queryParamMap.get("returnUrl") || '/';
    localStorage.setItem('returnUrl', returnUrl);
    
    this.afauth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afauth.auth.signOut();
  } 
}
