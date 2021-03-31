import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

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

    constructor(private renderer: Renderer2, private domCtrl: DomController) {
        // Doing nothing.
    }

    ngOnInit(): void {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 700ms');
        });
    }

    @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
        if (
            $event.detail.scrollTop > (this.scrollThreshold || 0) &&
            $event.detail.scrollTop > this.lastY
        ) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${this.header.clientHeight}px`);
            });
        } else {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
            });
        }

        this.lastY = $event.detail.scrollTop;
    }
}
