import { Component, OnInit } from '@angular/core';
import { AsyncService } from './async.service';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {


  counter$: Observable<any>;
  counter2$: Observable<any>;

  delay1: number = 2000;

  constructor(public as: AsyncService) { }

  ngOnInit() {

    this.counter$ = this.as.getNumber(this.delay1);
  }

  add() {
    this.counter2$ = this.as.getTimer(1000)
      .map((a: number) => (a * 10) + ' result');

  }

}
