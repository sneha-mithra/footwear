import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footwear } from './footwear';

@Injectable({
  providedIn: 'root'
})
export class FootwearService {

  private baseURL = "http://localhost:8080/list";
  constructor(private httpClient: HttpClient) { }
  getFootwearList(): Observable<Footwear[]>{
    return this.httpClient.get<Footwear[]>(`${this.baseURL}`);
  }
  createFootwear(footwear: Footwear): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,footwear);
  }
  getFootwearById(batchid: number): Observable<Footwear>{
    return this.httpClient.get<Footwear>(`${this.baseURL}/${batchid}`);
  }
  updateFootwear(batchid: number,footwear: Footwear): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${batchid}`,footwear)
  }
  deleteFootwear(batchid: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${batchid}`);
  }
  getLogin(batchid: number): Observable<object>{
    return this.httpClient.get(`${this.baseURL}/${batchid}`);
  }
}
