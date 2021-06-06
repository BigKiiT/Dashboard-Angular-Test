import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-monitoring',
  templateUrl: './chart-monitoring.component.html',
  styleUrls: ['./chart-monitoring.component.less']
})
export class ChartMonitoringComponent implements OnInit {

  typeChart: any;
  dataChart: any;
  optionsChart: any;
  @Input() countStep: number = 0;

  dataNumb: any[] = [10, 30, 50, 30, 40, 10, 30, 50, 10, 30, 50];

  constructor() { }

  ngOnInit(): void {
    this.chartMain();
    this.randArr();
  }

  chartMain(){
    this.typeChart = 'line';  
    this.dataChart = {
      labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
      datasets: [
        {
          label: "My Stats Chart",
          data: this.dataNumb,
          // backgroundColor: ["#45444A"],
          borderColor: ["#928585"],
          // color: ["#FFFFFF"]
        }
      ]
    };
    this.optionsChart = {
      responsive: true,
      maintainAspectRatio: false,
      legend: false,
      animation: {
        duration: 0
      }
    };
  }
  randArr(){
    setTimeout(() => {
      let numb = Math.floor(Math.random() * 90) + 5;
      this.dataNumb.shift();
      this.dataNumb.push(numb);
      this.randArr();
      this.chartMain();
    }, 2000);
  }
}
