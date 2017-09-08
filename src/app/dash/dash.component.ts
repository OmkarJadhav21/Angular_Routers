import { Router ,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private acRt:ActivatedRoute) { }
user:String
  ngOnInit() {
    this.user=this.acRt.snapshot.params['user']
    this.acRt.params.subscribe(
      myfun=>this.user=myfun['user']
    );
  }

}
