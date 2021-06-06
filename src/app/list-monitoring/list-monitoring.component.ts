import { Component, OnInit } from '@angular/core';
import { LocalStationService } from '../service/local-station.service';

@Component({
  selector: 'app-list-monitoring',
  templateUrl: './list-monitoring.component.html',
  styleUrls: ['./list-monitoring.component.less']
})
export class ListMonitoringComponent implements OnInit {
  dataLocal: any[] = [];
  myObj: any = {};
  constructor(private service: LocalStationService) { 

    this.service.getDataLocalstation()
    .subscribe(res=>{
      this.dataLocal = res;
      console.log("dataLocal ", this.dataLocal);
    });

  }
  ngOnInit(): void {
  }

}
