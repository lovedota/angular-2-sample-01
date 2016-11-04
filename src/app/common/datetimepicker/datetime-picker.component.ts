
import { 
    Component, OnInit, ElementRef, Input, OnDestroy 
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
export class DateTimePickerComponent implements OnInit, OnDestroy { 
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
}