import { Component } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.css']
})
export class Todo2Component {
  public textarea:any="";
  public time:any="";
  constructor (private _TodoserviceService:TodoserviceService){
    _TodoserviceService.getText().subscribe(
      (data:any)=>{
        this.textarea = data;
      }
    )
    _TodoserviceService.getTime().subscribe(
      (data:any)=>{
        this.time =data;
      }
    )
  }

}
