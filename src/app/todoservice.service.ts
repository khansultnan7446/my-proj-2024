import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  public textarea:any='';
  public time:Number=0;
  // create subject
private textSubject:BehaviorSubject<any>=
new BehaviorSubject(this.textarea);
private timeSubject:BehaviorSubject<any>=
new BehaviorSubject(this.time)
 
  constructor() { }
  SetText(textValue:any){
    this.textSubject.next(textValue)
  }
  getText(){
    return this.textSubject;
  }
  setTime(dateValue:any){
    this.timeSubject.next(dateValue)
  }
  getTime(){
    return this.timeSubject;
  }
}
