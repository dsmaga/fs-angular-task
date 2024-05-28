import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IotEventTableComponent} from "./components/iot-event-table/iot-event-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IotEventTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fd-angular-task';
}
