import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html'
})
export class EventFormComponent {
    @Input() event: FullCalendarEvent;
    @Output() onFormSubmit = new EventEmitter<any>();

    title: FormControl;
    content: FormControl;

    eventForm: FormGroup;

    constructor(private builder: FormBuilder) {
        this.buildForm();
    }

    buildForm(): void {
        this.eventForm = this.builder.group({
            'name': [
                this.event.title, 
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(24)
                ]
            ],
            'content': [
                this.event.content, 
                [
                    Validators.required
                ]
            ],
        });
    }

    onSubmit() {
        this.onFormSubmit.emit(this.event);
    }
}
