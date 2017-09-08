import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-compo',
  templateUrl: './forget-compo.component.html',
  styleUrls: ['./forget-compo.component.css']
})
export class ForgetCompoComponent implements OnInit {
  myImg: string;

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(
      qrpm=>{
        this.myImg =`../../assets/${qrpm['to']}.svg`
      }
    )


  }

}
