import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButtonModule} from '@angular/material/button';
import {IotEvent} from "../../models/iot-event";
import {NgFor} from "@angular/common";
import {TransPipe} from "../../pipes/trans.pipe";

type DisplayDataType = {label: string, value: string|number};

@Component({
  selector: 'app-iot-event-modal',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, NgFor, TransPipe],
  templateUrl: './iot-event-modal.component.html',
  styleUrl: './iot-event-modal.component.css'
})
export class IotEventModalComponent {

  public displayData: DisplayDataType[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) iotEvent: IotEvent) {
    this.displayData = this.parseIotEventToDisplayData(iotEvent);
  }

  private parseIotEventToDisplayData(iotEvent: IotEvent): DisplayDataType[] {
    let displayData: DisplayDataType[] = [];
    displayData.push({label: 'deviceId', value: iotEvent.deviceId});
    displayData.push({label: 'eventDate', value: iotEvent.eventDate});
    displayData.push({label: 'type', value: iotEvent.type});
    Object.entries(iotEvent.evtData).forEach(([key, value]) => {
      displayData.push({label: key, value});
    });
    return displayData;
  }
}
