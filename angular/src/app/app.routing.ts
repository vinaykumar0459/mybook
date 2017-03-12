import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { homepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  { path: '', component: homepageComponent, children : [
      { path : '', component: SignupComponent},
      { path : 'login', component : LoginComponent}
  ] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}