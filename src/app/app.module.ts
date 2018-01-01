// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule ,NgForm} from '@angular/forms';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component';
import { MyRoutingModule } from './app.router';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '@angular/router';
import { ForgetCompoComponent } from './forget-compo/forget-compo.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './dash/profile.component';
import { ActivityComponent } from './dash/activity.component';
import { PipesComponent } from './pipes/pipes.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ForgetCompoComponent,
    ProfileComponent,
    ActivityComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
