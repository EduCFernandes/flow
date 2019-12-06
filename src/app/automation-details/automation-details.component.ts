import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation-details',
  templateUrl: './automation-details.component.html',
  styleUrls: ['./automation-details.component.scss']
})
export class AutomationDetailsComponent implements OnInit {

  selectedView: 'FLOW' | 'TRIGGER' | 'SETTINGS' = 'FLOW';
  constructor() { }

  ngOnInit() {
  }

}
