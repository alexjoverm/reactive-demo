import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AsyncService } from '../demo1/async.service';


@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {

  obs$: Observable<number>;

  loading = false;


  constructor(
    private route: ActivatedRoute,
    private as: AsyncService) { }

  ngOnInit() {
    this.obs$ = this.route.params
      .map((p: any) => p.num)
      .do(x => this.loading = true)
      .switchMap(num => this.as.asyncMultiply(num))
      .do(x => this.loading = false);
  }

}
