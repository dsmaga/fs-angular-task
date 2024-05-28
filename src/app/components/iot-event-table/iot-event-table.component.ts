import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {IotEventService} from "../../services/iot-event-service";
import {IotEvent} from "../../models/iot-event";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {IotEventModalComponent} from "../iot-event-modal/iot-event-modal.component";
import {TransPipe} from "../../pipes/trans.pipe";

@Component({
  selector: 'iot-event-table',
  templateUrl: './iot-event-table.component.html',
  styleUrls: ['./iot-event-table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatProgressSpinnerModule, MatButtonModule, NgIf, TransPipe],
})
export class IotEventTableComponent implements OnInit {
  displayedColumns: string[] = ['deviceId', 'eventDate', 'type', 'details'];
  dataSource: IotEvent[] = [];
  loading: boolean = true;

  constructor(private readonly iotEventService: IotEventService,
              private readonly dialog: MatDialog
  ) {
  }

  openDetails(event: IotEvent) {
    this.dialog.open(IotEventModalComponent, {
      data: event
    });
  }

  ngOnInit() {
    this.iotEventService.getEvents().subscribe(events => {
      this.loading = false;
      this.dataSource = events;
    });
  }
}
