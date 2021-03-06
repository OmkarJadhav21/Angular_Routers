import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myImage:String
constructor(private router: Router) { }

ngOnInit() {
this.router.routerState.root.queryParams.subscribe(
  qry=>{
    this.myImage=`../../assets/${qry['to']}.svg`
  }
)
  }
  onLogin(emw,pass) {
this.router.navigate(['dash',emw],{ 
queryParams:{//passing through navigate function
  page:1,
  items:10
}
});
  }
}
