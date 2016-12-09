
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export let counter = 0;


@Injectable()
export class AsyncService {

  getNumber(speed: Number) {
    let num = ++counter;
    return new Observable(obs => {
      let t = setTimeout(() => {
        console.log('next value:', num++);
        obs.next(num);
      }, speed);

      return () => {
        console.log('cancelled', num);
        clearTimeout(t);
      };
    });
  }


  getNumberPromise(delay): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        counter++;
        console.log('Promise resolved', counter);
        resolve(counter);
      }, delay);
    });
  }


  getTimer(speed: number): Observable<number> {
    return new Observable(obs => {
      let ct = 0;
      let t = setInterval(() => {
        console.log('next value');
        obs.next(ct++);
      }, speed);

      return () => {
        console.log('cancelled');
        clearTimeout(t);
      };
    });
  }


}
