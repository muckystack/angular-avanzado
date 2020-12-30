import { Component } from '@angular/core';

import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public colors:Color[] = [
    {backgroundColor: ['#2E94EB', '#5C4DE3', '#ED1D50']}
  ];

}
