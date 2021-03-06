import { UserService } from './user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth: AuthService, router:Router, private userService: UserService){
    auth.user$.subscribe(user => {
      if(user){
        userService.save(user);
        //let returnUrl = localStorage.getItem('returnUrl');
        let returnUrl  = JSON.parse(localStorage.getItem('returnUrl') || '{}');
        router.navigateByUrl(returnUrl);
        
      }
    });
  }
}

