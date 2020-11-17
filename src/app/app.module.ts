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
import { WiltProfileComponent } from './wilt-profile/wilt-profile.component';
import { WiltNavComponent } from './wilt-nav/wilt-nav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {path: 'login', component: WiltLoginComponent},
  {path: 'signup', component: WiltSignupComponent},
  {path: 'home', component: WiltHomeComponent},
  {path: 'profile', component: WiltProfileComponent},
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
    WiltLandingComponent,
    WiltProfileComponent,
    WiltNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModalModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
