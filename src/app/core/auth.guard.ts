import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, CanActivate} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth'
import {UserService} from '../core/user.service'
// import { resolve } from 'path';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ){}
  
  canActivate(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        this.router.navigate(['/user']);
        return resolve(false);
      }, err => {
        return resolve(true);
      })
    })
  }
}
