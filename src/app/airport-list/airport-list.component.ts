import { Component, OnInit } from '@angular/core';

import { AirportService } from '../airport.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.scss']
})
export class AirportListComponent implements OnInit {

  data = { lat: null, lon: null, radius: null };

  displayedColumns: string[] = ['id', 'name', 'lat', 'lon', 'dist'];
  dataSource = [];

  constructor(private airportService: AirportService) {}

  ngOnInit() {
  }

  async find() {
    const { radius, lat, lon } = this.data;
    // Convert radius to km
    this.dataSource = await this.airportService.findAll(radius * 1_000, lat, lon);
  }

}
