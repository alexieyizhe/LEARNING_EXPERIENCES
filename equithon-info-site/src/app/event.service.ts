import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { Event } from './event';
import { EVENTS } from './all-events';

@Injectable()
export class EventService {

  constructor(private message_service: MessageService) { }

  getEvents(): Observable<Event[]> {
    this.message_service.add('EventService: fetched equithon events');
    return of(EVENTS);
  }

  getEvent(id: number): Observable<Event> {
    this.message_service.add(`EventService: fetched event id=${id}`);
    return of(EVENTS.find(event => event.id === id));
  }

}
