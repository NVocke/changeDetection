import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // OnPush only works when state changes through @Input() injection.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnChanges {

  @Input() status;
  counter = 0;

  constructor() {
  }

  ngOnChanges() {
    console.log('Changes: ', this.counter);
    this.counter++;
  }

}
