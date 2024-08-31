import { Component } from '@angular/core';
import { Flipkarts1Service } from '../flipkarts1.service';

@Component({
  selector: 'app-flipkart1',
  templateUrl: './flipkart1.component.html',
  styleUrls: ['./flipkart1.component.css']
})
export class Flipkart1Component {
  public flipkarts1:any = [];
  constructor( private _fliplarts1:Flipkarts1Service){
    _fliplarts1.getflipkarts1().subscribe(
      (data:any)=>{
        this.flipkarts1=data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  }

}
