import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent {
  public maxlength:number=50;
  public textarea:string='';
  public count:number=0;
  countlatters(){
    if (this.count=this.maxlength){
      this.count=this.textarea.length
    }

  }


}
