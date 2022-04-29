import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActiveSlideService } from '../active-slide.service';
import { EncSlideComponent } from '../enc-slide/enc-slide.component';

@Component({
  selector: 'enc-slide-host',
  templateUrl: './enc-slide-host.component.html',
  styleUrls: ['./enc-slide-host.component.css'],
})
export class EncSlideHostComponent implements OnInit, OnDestroy {
  isFullscreen = false;
  @Input()
  activeSlide: number = 0;
  @ViewChild('host')
  host?: ElementRef<HTMLElement>;
  @ViewChildren(EncSlideComponent)
  private childSlides?: QueryList<EncSlideComponent> = new QueryList();

  private destroy$ = new Subject<void>();

  constructor(private slides: ActiveSlideService) { }

  get canGoBack() {
    if (this.activeSlide <= 0) return false;
    return true;
  }

  get canGoNext() {
    if (this.activeSlide > (this.childSlides?.length ?? 0)) return false;
    return true;
  }

  ngOnInit() {
    this.setSlide(0);
    fromEvent(document, 'fullscreenchange')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (document.fullscreenElement) {
          this.isFullscreen = true;
        } else {
          this.isFullscreen = false;
        }
      });
    fromEvent(window, 'keydown')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: KeyboardEvent) => {
        switch (event.key) {
          case 'ArrowLeft':
            this.onBack();
            break;
          case 'ArrowRight':
            this.onNext();
            break;
          case 'Enter':
            this.toggleFullscreen('enter');
            break;
          case 'Escape':
            this.toggleFullscreen('exit');
            break;
        }
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next(void 0);
    this.destroy$.complete();
  }

  onBack() {
    if (!this.canGoBack) return;
    this.setSlide(this.activeSlide - 1);
  }

  onNext() {
    if (!this.canGoNext) return;
    this.setSlide(this.activeSlide + 1);
  }

  async toggleFullscreen(action?: 'enter' | 'exit') {
    if (action === 'exit') {
      try {
        this.isFullscreen && document.fullscreenElement && await document.exitFullscreen();
      } catch { }
      return;
    }
    if (action === 'enter') {
      try {
        await this.host.nativeElement.requestFullscreen();
      } catch { }
    }
    if (this.isFullscreen && document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (error) {
        console.debug('Failed to exit fullscreen mode');
      }
    } else {
      try {
        await this.host.nativeElement.requestFullscreen();
      } catch (error) {
        console.debug('Failed to enter fullscreen mode');
      }
    }
  }

  private setSlide(index: number) {
    this.activeSlide = index;
    this.slides.setActiveSlide(index);
  }
}
