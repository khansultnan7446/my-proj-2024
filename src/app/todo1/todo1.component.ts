import { Component } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.css']
})
export class Todo1Component {
  public textarea:any="";
  public time:any="";
  constructor (private _TodoserviceService:TodoserviceService){}

  create(){
    this._TodoserviceService.SetText(this.textarea)
    this._TodoserviceService.setTime(this.time)
  }
  reset(){
    location.reload();
    
  }

}
  
  



