import { Component } from '@angular/core';
import { EmailsService } from '../emails.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  public emails:any = [];
  constructor(private _emailsService:EmailsService){
    _emailsService.getemails().subscribe(
      (data:any)=>{
        this._emailsService = data;
      },
      (Error:any)=>{
        alert('internal server error');
      }
      
    )

  }
  
  

}
