import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }
  
  setMessage() {
    this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';
        this.router.navigateByUrl(redirect);
      }
    })
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
