import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

import { AsyncService } from '../demo1/async.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit, OnDestroy {

  subs: Subscription;
  values: string;
  toggle = true;

  str = 'A REALLY LONG STRING';

  constructor(public af: AsyncService) { }

  ngOnInit() {
    this.start();
  }

  start() {
    this.subs = this.af.getTimer(100)
      .map(a => {
        if (a <= this.str.length) {
          return this.str.slice(0, a);
        } else {
          return this.str + ' ' + a;
        }
      })
      .subscribe(v => {
        // console.log(v);
        this.values = '' + v;
      });
    this.toggle = true;
  }

  cancel() {
    this.subs.unsubscribe();
    this.toggle = false;
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }


}
