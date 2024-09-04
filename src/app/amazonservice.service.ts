import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonserviceService {
  // create subject
  private count:number=0;
  private countSubject:BehaviorSubject<number>=
  new BehaviorSubject(0);

  constructor() { }
  // set value
  setCount(){
    this.count++;
    this.countSubject.next(this.count);
  }
  // get value
  getCount(){
    return this.countSubject;
  }
}
