import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { LogApp } from 'src/app/models/zsupport/log.model';
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
    LogApp.consoleLog('Eseguita Direttiva che inizializza lo Swiper con i parametri ','warn');
    
    // @ts-ignore
    this.el.nativeElement.initialize();
  }

}
