import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample-service.service';

@Component({
  selector: 'enc-sample-two',
  template: `
    <p>Shared Count: {{ counter.counter }}</p>
    <p>Shared Count <small>async</small>: {{ counter.asObservable() | async }}</p>
    <p>Local Count: {{ localCount }}</p>
    <section class="separated">
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="resetLocal()">Reset Local</button>
      <button (click)="resetShared()">Reset Shared</button>
    </section>
  `,
  styles: [
    `:host {
        display:flex;
        flex-direction: column;
        border: 2px solid red;
        margin: 0.5em;
        padding: 0.5em;
     }

     .separated {
       display: flex;
       justify-content: space-evenly;
     }
    `
  ]
})
export class EncSampleTwoComponent implements OnInit {

  public localCount = 0;

  constructor(public readonly counter: SampleService) { }

  ngOnInit(): void {
  }

  increment() {
    this.localCount += 1;
    this.counter.increment();
  }

  decrement() {
    this.localCount -= 1;
    this.counter.decrement();
  }

  resetLocal() {
    this.localCount = 0;
  }

  resetShared() {
    this.counter.reset();
  }

}
