import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'svg-lines',
  templateUrl: './svg-lines.component.html',
  styleUrls: ['./svg-lines.component.scss']
})
export class SvgLinesComponent implements OnInit {
  @Input() type: 'conditional-top' | 'conditional-bottom' | 'for-loop-top' | 'for-loop-bottom';

  constructor() { }

  ngOnInit() {
  }

}
