import { Component } from '@angular/core';
import { CommonService } from '../commonservice.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {
  public count:number = 0;
  public cartCount:number=0;
  constructor (private _CommonService:CommonService){
    _CommonService.getCount().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
    _CommonService.getCartCount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }


}
