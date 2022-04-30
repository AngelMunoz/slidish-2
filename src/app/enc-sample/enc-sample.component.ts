import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample-service.service';

@Component({
  selector: 'enc-sample',
  templateUrl: './enc-sample.component.html',
  styleUrls: ['./enc-sample.component.css']
})
export class EncSampleComponent implements OnInit {

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
