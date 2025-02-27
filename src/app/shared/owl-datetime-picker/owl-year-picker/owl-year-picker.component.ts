import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DateView, OwlDateTimeComponent, OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker';
import { OWL_NATIVE_YEAR_FORMATS } from 'src/app/service/app-general.service';

@Component({
  selector: 'app-owl-year-picker',
  templateUrl: './owl-year-picker.component.html',
  styleUrls: ['./owl-year-picker.component.scss'],
  providers: [
    { provide: OWL_DATE_TIME_FORMATS, useValue: OWL_NATIVE_YEAR_FORMATS },
  ]
})
export class OwlYearPickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() owlFieldControl!: FormControl;

  owlDateTimeYearStartView!: DateView;

  result!: string;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
    this.result = this.result || '';
    this.owlDateTimeYearStartView = DateView.MULTI_YEARS;
  }

  public setOwlDateTimeYear(selectedMonthYear: object, yearpicker: OwlDateTimeComponent<object>): void {
    yearpicker.close();

    this.owlFieldControl.setValue(selectedMonthYear);
  }

}