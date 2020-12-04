import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WiltCardComponent } from './wilt-card/wilt-card.component';
import { WiltHomeComponent } from './wilt-home/wilt-home.component';
import { WiltLandingComponent } from './wilt-landing/wilt-landing.component';
import { WiltLoginComponent } from './wilt-login/wilt-login.component';
import { WiltPageNotFoundComponent } from './wilt-page-not-found/wilt-page-not-found.component';
import { WiltProfileComponent } from './wilt-profile/wilt-profile.component';
import { WiltSignupComponent } from './wilt-signup/wilt-signup.component';


const routes: Routes = [
  {path: 'login', component: WiltLoginComponent},
  {path: 'signup', component: WiltSignupComponent},
  {path: 'home', component: WiltHomeComponent},
  {path: 'profile', component: WiltProfileComponent},
  {path: 'user/:id', component: WiltProfileComponent},
  {path: 'wilt/:id', component: WiltCardComponent},
  {path: '', component: WiltLandingComponent},
  {path: '**', component: WiltPageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
