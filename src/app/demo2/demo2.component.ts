import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { AsyncService } from '../demo1/async.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {

  values$ = Observable.interval(100);

  constructor(public af: AsyncService) { }

  ngOnInit() { }


}
