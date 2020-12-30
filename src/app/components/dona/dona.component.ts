import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title:String = 'Sin titulo';

  // Doughnut
  @Input('labels') doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public colors:Color[] = [
    {backgroundColor: ['#2E94EB', '#5C4DE3', '#ED1D50']}
  ];

}
