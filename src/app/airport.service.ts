import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public async findAll(radius: number, lat: number, lon: number) {
    return this.http.get<any[]>(`${this.apiUrl}/airports`, {
      params: {
        radius: radius.toString(),
        lat: lat.toString(),
        lon: lon.toString()
      },
    })
      .toPromise();
  }
}
