import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStationService {

  constructor(private http:HttpClient) { }

  getDataLocalstation(){
    return this.http.get<any[]>('http://localhost:4200/assets/data.json');
  }
}
