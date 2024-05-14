import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

// @Injectable({providedIn: 'root'})
// export class AuthGuard {
//   constructor() { }

// }

const checkAuthStatus = ():boolean  | Observable<boolean> =>  {
  const authService = inject( AuthService );
  const router  = inject( Router  );

  return  authService.checkAuthentication()
    .pipe(
      tap((isAuth)  =>  {
        if  ( !isAuth ) router.navigate(['./auth/login']);
      })
    )
}

export  const authCanMatch: CanMatchFn  = ( route:Route, urlSegments:  UrlSegment[]  )  =>  {
  return  checkAuthStatus();
}

export const  authCanActivated: CanActivateFn = ( route:  ActivatedRouteSnapshot, state:  RouterStateSnapshot ) =>  {
  return  checkAuthStatus();
}
