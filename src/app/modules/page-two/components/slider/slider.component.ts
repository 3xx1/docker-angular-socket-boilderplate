import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider-component',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.scss' ],
  providers: []
})

export class SliderComponent {
  @Input() value: number;
  @Input() minVal: number = 0;
  @Input() maxVal: number = 100;
  @Output() valueChange:EventEmitter<any>  = new EventEmitter();

  constructor() {

  }

  public onValueUpdate(param: any) {
    this.valueChange.emit(param);
  }
}
