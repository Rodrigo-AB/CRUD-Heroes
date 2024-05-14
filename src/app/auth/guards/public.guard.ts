import { inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';


const checkAuthStatus = ():boolean  | Observable<boolean> =>  {
  const authService = inject( AuthService );
  const router  = inject( Router  );

  return  authService.checkAuthentication()
    .pipe(
      tap((isAuth)  =>  {
        if  ( !isAuth ) router.navigate(['./']);
      }),
      map(  isAuth  =>  !isAuth )
    )
}

export  const authPublicCanMatch: CanMatchFn  = ( route:Route, urlSegments:  UrlSegment[]  )  =>  {
  return  checkAuthStatus();
}

export const  authPublicCanActivated: CanActivateFn = ( route:  ActivatedRouteSnapshot, state:  RouterStateSnapshot ) =>  {
  return  checkAuthStatus();
}
