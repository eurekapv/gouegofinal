import { Directive, HostListener, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { DomController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

/**
 * Moves away the header when scrolling down.
 */
@Directive({
    selector: '[appHideHeader]',
})
export class HideHeaderDirective implements OnInit {
    @Input('header') header: any;
    
    /**
     * Minimum scroll offset from top in pixels until the animation kicks in.
     */
    @Input('scrollThreshold') scrollThreshold: number;

    private lastY = 0;
    private heightForScroll = -1;

    constructor(private renderer: Renderer2, 
                private domCtrl: DomController,
                private el: ElementRef,
                private platform: Platform) {
        // Doing nothing.
    }

    ngOnInit(): void {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 500ms');
        });
    }

    getHeightForScrollContent(myEl: ElementRef) {
        
        if (this.heightForScroll == -1 || isNaN(this.heightForScroll)) {

            if (myEl && myEl.nativeElement) {
                let domDivCont = myEl.nativeElement.firstElementChild;
                if (domDivCont) {
                    this.heightForScroll = domDivCont.clientHeight - this.platform.height() - this.scrollThreshold;
                }
            }

        }
    }

    @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {

            //Faccio calcolare l'altezza utile al calcolo
            //L'altezza è l'intera altezza del contenuto dello Scroll - Altezza del Canvas della pagina
            this.getHeightForScrollContent(this.el);

            if (this.heightForScroll != -1 ) {
                
                if (
                    $event.detail.scrollTop > (this.scrollThreshold || 0) &&
                    $event.detail.scrollTop > this.lastY
                ) {
                    this.domCtrl.write(() => {
                        this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
                        
                    });
                } else if ($event.detail.scrollTop < this.heightForScroll){
                    this.domCtrl.write(() => {
                        this.renderer.setStyle(this.header, 'margin-top', '0');
                        
                    });
                }
        
                this.lastY = $event.detail.scrollTop;
            }
            else {
                console.warn('Directive Scroll: heightForScroll not valid');
            }
    }
}
