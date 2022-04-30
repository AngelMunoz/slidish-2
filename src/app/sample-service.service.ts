import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private counter$ = new BehaviorSubject<number>(0);

  get counter(): number {
    return this.counter$.value;
  }

  asObservable(): Observable<number> {
    return this.counter$.asObservable();
  }

  public increment() {
    this.counter$.next(this.counter$.value + 1);
  }

  public decrement() {
    this.counter$.next(this.counter$.value - 1);
  }

  public reset() {
    this.counter$.next(0);
  }
}
