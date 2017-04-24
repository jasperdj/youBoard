import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-page',
  templateUrl: './application-page.component.html',
  styleUrls: ['./application-page.component.less']
})
export class ApplicationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getApplicationStats() {
    return [
      {name: 'Contact node', statLabels: ['Online', 'Aantal meters'], statValues: ['yes', 1233]},
      {name: 'Contact node', statLabels: ['Online', 'Aantal meters'], statValues: ['no', 1233]}
    ];
  }

}
