
import { 
    Component, OnInit, ElementRef, Input, OnDestroy, OnChanges, SimpleChange 
} from '@angular/core';

@Component({
    selector: 'app-datetime-picker',
    template: `
        <div class='input-group date'>
            <input type='text' class="form-control" />
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
            </span>
        </div>
    `
})
export class DateTimePickerComponent implements OnInit, OnDestroy, OnChanges { 
    @Input() date;
    private $element: JQuery;
    
    constructor(private elmenentRef: ElementRef) {}

    ngOnInit() {
        const self = this;

        this.$element = $(this.elmenentRef.nativeElement).find('.date');
        
        this.$element.datetimepicker({
            defaultDate: this.date || moment()
        });

        this.$element.on("dp.change", function (e: any) {
            self.date = e.date;
        });
    }

    ngOnDestroy() {
        this.$element.datetimepicker('destroy');
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) { 
        for (let propName in changes) {
            let changedProp = changes[propName];
            let from = JSON.stringify(changedProp.previousValue);
            let to =   JSON.stringify(changedProp.currentValue);
            
            if (propName === 'date' && this.$element) {
                this.$element.data('DateTimePicker').date(changedProp.currentValue);
            }
        }
    }
}