import { Component } from '@angular/core';
import { TodoserviceService } from '../todoservice.service';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.css']
})
export class Todo3Component {
  constructor (private _TodoserviceService:TodoserviceService){}

}
