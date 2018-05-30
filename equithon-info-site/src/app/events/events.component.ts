import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  all_events: Event[];

  getEvents(): void {
    this.event_service.getEvents()
      .subscribe(all_events => this.all_events = all_events);
  }

  constructor(private event_service: EventService) { }

  ngOnInit() {
    this.getEvents();
  }



}
