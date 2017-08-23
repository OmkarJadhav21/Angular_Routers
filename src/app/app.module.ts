import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyRoutingModule } from './app.router';
import { DashComponent } from './dash/dash.component';
import { RouterModule } from '@angular/router';
import { ForgetCompoComponent } from './forget-compo/forget-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    ForgetCompoComponent
  ],
  imports: [
    BrowserModule,
    MyRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
