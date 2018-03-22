import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  events: Event[] = [];

  constructor(private event_service: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.event_service.getEvents()
      .subscribe(events => this.events = events.slice(1, 5));
  }
}
