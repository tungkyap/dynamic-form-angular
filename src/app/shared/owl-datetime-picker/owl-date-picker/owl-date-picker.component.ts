import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker';
import { OWL_NATIVE_DATE_FORMATS } from 'src/app/service/app-general.service';

@Component({
  selector: 'app-owl-date-picker',
  templateUrl: './owl-date-picker.component.html',
  styleUrls: ['./owl-date-picker.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_DATE_FORMATS },
  ]
})
export class OwlDatePickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() owlFieldControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
  }

}