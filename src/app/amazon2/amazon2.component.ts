import { Component } from '@angular/core';
import { AmazonserviceService } from '../amazonservice.service';

@Component({
  selector: 'app-amazon2',
  templateUrl: './amazon2.component.html',
  styleUrls: ['./amazon2.component.css']
})
export class Amazon2Component {
  public count:number=0;
  constructor (private _AmazonserviceService:AmazonserviceService){
  _AmazonserviceService.getCount().subscribe(
    (data:any)=>{
      this.count=data;
    }
  )
  }

}
