import { ActivityComponent } from './dash/activity.component';
import { ProfileComponent } from './dash/profile.component';
import { Component } from '@angular/core';
// import { ForgetPassComponent } from './forget-pass/forget-pass.component';
// import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ForgetCompoComponent } from './forget-compo/forget-compo.component';

const childRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'activity', component: ActivityComponent } 
];
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash/:user', component: DashComponent,children:childRoutes },
    { path: 'forgetpass', component: ForgetCompoComponent },

    {path:'**',component:LoginComponent}//sequence of this statement should be at the last 
    //because it says that anything above this is going to loginComponent 
];

// tslint:disable-next-line:eofline
export const MyRoutingModule = RouterModule.forRoot(routes);