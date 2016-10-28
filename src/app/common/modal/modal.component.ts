//https://toddmotto.com/transclusion-in-angular-2-with-ng-content

import { Component, OnInit, ElementRef, Input, OnChanges, SimpleChange, OnDestroy, Renderer } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit, OnDestroy, OnChanges { 
    @Input() events: FullCalendarEvent[];
    
    private $element: JQuery;
    
    constructor(private elmenentRef: ElementRef) {}

    ngOnInit() {
        this.$element = $(this.elmenentRef.nativeElement, '.modal').find('.modal');
        console.log(this.$element);
    }

    ngOnDestroy() {
        this.$element.modal('destroy');
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      
    }

    open() {
        this.$element.modal('show');
    }

    close() {
        this.$element.modal('hide');
    }
}