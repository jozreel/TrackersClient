import {Part} from './part'
export class Service{
    date:Date;
    timeIn:string;
    timeOut:string;
    deviceTampering:boolean;
    wireTampering:boolean;
    batteryTesting:string;
    voltage:number;
    batteryType:number;
    partsReplaced:Part[];
    TrackerModelID:number;
    ServiceModelID:number;
}