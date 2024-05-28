type IotEventType = 'deviceMalfunction'|'temperatureExceeded'|'doorUnlocked';

type DeviceMalfunctionEventDataType = {
  reasonCode: number;
  reasonText: string;
}


type TemperatureExceededEventDataType = {
  temp: number;
  threshold: number;
}

type DoorUnlockedEventDataType = {
  unlockDate: number;
}

type IotEventDataType = DeviceMalfunctionEventDataType | TemperatureExceededEventDataType | DoorUnlockedEventDataType;


interface IotAbstractEvent {
  deviceId: string;
  eventDate: number;
  type: IotEventType;
  evtData: IotEventDataType;

}

export interface DeviceMalfunctionEvent extends IotAbstractEvent {
  type: 'deviceMalfunction';
  evtData: DeviceMalfunctionEventDataType;
}


export interface TemperatureExceededEvent extends IotAbstractEvent {
  type: 'temperatureExceeded';
  evtData: TemperatureExceededEventDataType;
}



export interface DoorUnlockedEvent extends IotAbstractEvent {
  type: 'doorUnlocked';
  evtData: DoorUnlockedEventDataType;
}


export type IotEvent = DeviceMalfunctionEvent | TemperatureExceededEvent | DoorUnlockedEvent;
