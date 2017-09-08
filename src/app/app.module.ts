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
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
