import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActiveSlideService } from '../active-slide.service';
import type { SlideKind, TextPosition } from '../types';
@Component({
  selector: 'enc-slide',
  templateUrl: './enc-slide.component.html',
  styleUrls: ['./enc-slide.component.css'],
})
export class EncSlideComponent implements OnInit, OnDestroy {
  show = false;

  @Input()
  index?: number;

  @Input()
  backgroundImage: string | 'none' = 'none';

  @Input()
  kind: SlideKind = 'Generic';

  @Input('text-position')
  textPosition: TextPosition = 'center-center';

  private destroy$ = new Subject<void>();

  constructor(private readonly slides: ActiveSlideService) {}

  ngOnInit() {
    this.slides.activeSlide$
      .pipe(takeUntil(this.destroy$))
      .subscribe((index) => {
        if (index === this.index) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }

  get articleMargin() {
    // top | right | bottom | left
    switch (this.textPosition) {
      case 'top-center':
        return '3em auto auto auto';
      case 'top-left':
        return '3em auto auto 13em';
      case 'top-right':
        return '3em 13em auto auto';
      case 'bottom-center':
        return 'auto auto 13em auto';
      case 'bottom-left':
        return 'auto auto 13em 13em';
      case 'bottom-right':
        return 'auto 13em 13em auto';
      case 'center-center':
        return 'auto';
      case 'center-left':
        return 'auto 13em auto auto';
      case 'center-right':
        return 'auto auto auto 13em';
    }
  }
}
