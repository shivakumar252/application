import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Place } from './place';
@Injectable({
  providedIn: 'root'
})
export class PlacedataService {
  arr:Place[]=[];
  constructor(private _http:HttpClient) { }

  editPlace(org_name,item)
  {
    let body = JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.put(this.arr+org_name, body, { headers: head });
  }
}
