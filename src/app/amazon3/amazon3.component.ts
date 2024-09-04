import { Component } from '@angular/core';
import { AmazonserviceService } from '../amazonservice.service';

@Component({
  selector: 'app-amazon3',
  templateUrl: './amazon3.component.html',
  styleUrls: ['./amazon3.component.css']
})
export class Amazon3Component {
  public count:number=0;
  constructor (private  _AmazonserviceService:AmazonserviceService){
    _AmazonserviceService.getCount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
  }


}
