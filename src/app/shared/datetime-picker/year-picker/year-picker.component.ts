import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from '@angular/material-luxon-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { DateTime } from 'luxon';
import { LUXON_YEAR_FORMATS } from 'src/app/service/app-general.service';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: LuxonDateAdapter, deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: LUXON_YEAR_FORMATS },
  ]
})
export class YearPickerComponent implements OnInit {

  // `appearance` Input from datetime main component
  @Input() appearance!: MatFormFieldAppearance;

  // `color` Input from datetime main component
  @Input() color!: string;

  // `labelText` Input from datetime main component
  @Input() labelText!: any;

  // `placeholderText` Input from datetime main component
  @Input() placeholderText!: any;

  @Input() fieldControl!: FormControl;

  result!: string;

  constructor() { }

  ngOnInit(): void {
    this.labelText = this.labelText || 'Choose a date';
    this.placeholderText = this.placeholderText || 'Choose a date';
    this.result = this.result || '';
  }

  setYear(normalizedMonthAndYear: DateTime, datepicker: MatDatepicker<DateTime>) {
    datepicker.close();

    const CTRL_VALUE = DateTime.fromObject({
      year: normalizedMonthAndYear.year
    });

    this.fieldControl.setValue(CTRL_VALUE);
  }

}