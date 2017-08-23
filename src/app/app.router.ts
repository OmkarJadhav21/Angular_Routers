// import { ForgetPassComponent } from './forget-pass/forget-pass.component';
// import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ForgetCompoComponent } from './forget-compo/forget-compo.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash', component: DashComponent },
    { path: 'forgetpass', component: ForgetCompoComponent }
];

// tslint:disable-next-line:eofline
export const MyRoutingModule = RouterModule.forRoot(routes);