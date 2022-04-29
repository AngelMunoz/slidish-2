import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActiveSlideService {
  activeSlide$ = new BehaviorSubject<number>(0);

  setActiveSlide(slide: number) {
    this.activeSlide$.next(slide);
  }
}
