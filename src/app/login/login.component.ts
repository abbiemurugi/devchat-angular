<<<<<<< HEAD
import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
// import { AuthProviders } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn } from '../router.animations';
>>>>>>> 67e6cf7396a9dcabd87c78f59a2f2800d40f9024

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
<<<<<<< HEAD
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryTwitterLogin(){
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/user']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
=======
  animations: [moveIn()],
  host: {'[@moveIn]': ''}
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/members');
    }
  });
}

loginFb() {
  this.af.auth.login({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Popup,
  }).then(
      (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      this.error = err;
    })
}

loginGoogle() {
  this.af.auth.login({
    provider: AuthProviders.Google,
    method: AuthMethods.Popup,
  }).then(
      (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      this.error = err;
    })
}

  ngOnInit() {
  }

>>>>>>> 67e6cf7396a9dcabd87c78f59a2f2800d40f9024
}
