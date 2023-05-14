import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { LogApp } from 'src/app/models/log.model';
import { SwiperOptions } from 'swiper';

@Directive({
  selector: '[appSwiper]'
})
export class SwiperDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  @Input('config') config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    Object.assign(this.swiperElement, this.config);
    console.warn('Inizializzo Swiper');
    // @ts-ignore
    this.el.nativeElement.initialize();
  }

}
