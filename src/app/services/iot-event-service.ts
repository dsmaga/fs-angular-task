import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {IotEvent} from "../models/iot-event";

type EventsResponse = {
  events: IotEvent[];
}

const MOCK_EVENTS: EventsResponse = {
  "events": [
    {
      "deviceId": "A23",
      "eventDate": 1710355477,
      "type": "deviceMalfunction",
      "evtData": {
        "reasonCode": 12,
        "reasonText": "temp sensor not responding"
      }
    },
    {
      "deviceId": "A23",
      "eventDate": 1710354477,
      "type": "deviceMalfunction",
      "evtData": {
        "reasonCode": 11,
        "reasonText": "no power"
      }
    },
    {
      "deviceId": "F12HJ",
      "eventDate": 1710353477,
      "type": "temperatureExceeded",
      "evtData": {
        "temp": 10.3,
        "threshold": 8.5
      }
    },
    {
      "deviceId": "D12-1-12",
      "eventDate": 1710352477,
      "type": "doorUnlocked",
      "evtData": {
        "unlockDate": 1710350477
      }
    }
  ]
}

@Injectable({
    providedIn: 'root'
  })
export class IotEventService {

  data: Observable<IotEvent[]> = new Observable<IotEvent[]>(subscriber => {
    setTimeout(() => {
      subscriber.next(MOCK_EVENTS.events);
      subscriber.complete();
    }, 2000)
  });

  getEvents(): Observable<IotEvent[]> {
    return this.data;
  }
}
