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
  promise: Promise<number>;

  delay1: number = 2000;

  constructor(public as: AsyncService) { }

  ngOnInit() {

  }

  add() {
    this.counter$ = this.as.getNumber(1000)
      .map((a: number) => (a * 10) + ' result');
  }

  addPromise() {
    this.promise = this.as.getNumberPromise(1000);
  }

}
