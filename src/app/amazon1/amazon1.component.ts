import { Component } from '@angular/core';
import { AmazonserviceService } from '../amazonservice.service';

@Component({
  selector: 'app-amazon1',
  templateUrl: './amazon1.component.html',
  styleUrls: ['./amazon1.component.css']
})
export class Amazon1Component {

  public count:number=0;
  constructor (private _AmazonserviceService:AmazonserviceService){}
  add(){
    this._AmazonserviceService.setCount();
  
    }
  }
  


