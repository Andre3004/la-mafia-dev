import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detail-field',
  templateUrl: './detail-field.component.html',
  styleUrls: ['./detail-field.component.scss']
})
export class DetailFieldComponent implements OnInit
{
  /*-------------------------------------------------------------------
  *                           ATTRIBUTES
  *-------------------------------------------------------------------*/
  /**
   *
   */
  @Input()
  label: string;
  /**
   *
   */
  @Input()
  value: string;
  /**
   *
   */
  @Input()
  valueCSSClass: string;

  /*-------------------------------------------------------------------
  *                           BEHAVIORs
  *-------------------------------------------------------------------*/
  /**
   *
   */
  constructor() { }

  /**
   *
   */
  ngOnInit()
  {
    this.value = ( this.value && this.value.length ) ? this.value : '-';
  }
}
