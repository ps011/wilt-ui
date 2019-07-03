import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WiltLoginComponent } from './wilt-login/wilt-login.component';
import {RouterModule, Routes} from '@angular/router';
import { WiltSignupComponent } from './wilt-signup/wilt-signup.component';
import { WiltHomeComponent } from './wilt-home/wilt-home.component';
import { WiltPageNotFoundComponent } from './wilt-page-not-found/wilt-page-not-found.component';
import { WiltLandingComponent } from './wilt-landing/wilt-landing.component';


const routes: Routes = [
  {path: 'login', component: WiltLoginComponent},
  {path: 'signup', component: WiltSignupComponent},
  {path: 'home', component: WiltHomeComponent},
  {path: '', component: WiltLandingComponent},
  {path: '**', component: WiltPageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WiltLoginComponent,
    WiltSignupComponent,
    WiltHomeComponent,
    WiltPageNotFoundComponent,
    WiltLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
