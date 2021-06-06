import { Component, Input, OnInit } from '@angular/core';
import { LocalStationService } from '../service/local-station.service';

@Component({
  selector: 'app-main-monitoring',
  templateUrl: './main-monitoring.component.html',
  styleUrls: ['./main-monitoring.component.less']
})
export class MainMonitoringComponent implements OnInit {
  dataStation: any[] = [];

  constructor(private service: LocalStationService ) { 
    this.service.getDataLocalstation().subscribe(Response => {
        Response.sort(function (a) {
          if (a.status == "OFF") {
            return -1;
          } else if (a.status != "ON") {
              return 1;
          } else {
              return 0;
          }
      });
      this.dataStation = Response;
      }
    )
  }

  ngOnInit(): void {
    
  }
}
