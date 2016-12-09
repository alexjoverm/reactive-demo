import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { AsyncService } from '../demo1/async.service';


@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {

  num$ = new FormControl();
  result$: Observable<number>;
  loading = false;

  constructor(private as: AsyncService) { }

  ngOnInit() {

    this.result$ =
      this.num$.valueChanges
        .distinctUntilChanged()
        .do(x => this.loading = true)
        .switchMap(v => this.as.asyncMultiply(v))
        .do(x => this.loading = false);

  }



}
