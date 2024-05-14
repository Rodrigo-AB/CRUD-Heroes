import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { authCanActivated, authCanMatch } from './auth/guards/auth.guard';
import { authPublicCanActivated, authPublicCanMatch } from './auth/guards/public.guard';
// import { AuthGuard } from './auth/guards/auth.guard';

//dominio.com/
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()  =>  import('./auth/auth.module').then(  m =>  m.AuthModule),
    canActivate:  [ authPublicCanActivated  ],
    canMatch: [ authPublicCanMatch ]
  },
  {
    path: 'heroes',
    loadChildren: ()  =>  import('./heroes/heroes.module').then(  m =>  m.HeroesModule),
    canActivate:  [ authCanActivated ],
    canMatch: [ authCanMatch ]
  },
  {
    path: '404',
    component:  Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'heros',
    pathMatch:  'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
