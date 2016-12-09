
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';



@Injectable()
export class AsyncService {

  getNumber(speed: Number) {
    let num = 0;
    return new Observable(obs => {
        let t = setTimeout(() => {
          console.log('next value:', ++num);
          obs.next(num);
        }, speed);

        return () => {
          console.log('cancelled');
          clearTimeout(t);
        };
    });
  }


  getTimer(speed: number): Observable<number> {
    return new Observable(obs => {
        let counter = 0;
        let t = setInterval(() => {
          console.log('next value');
          obs.next(counter++);
        }, speed);

        return () => {
          console.log('cancelled');
          clearTimeout(t);
        };
    });
  }


}
