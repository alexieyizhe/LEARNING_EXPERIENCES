import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event;

  constructor(
    private route: ActivatedRoute,
    private event_service: EventService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.event_service.getEvent(id)
      .subscribe(event => this.event = event);
  }

  goBack(): void {
    this.location.back();
  }

}
