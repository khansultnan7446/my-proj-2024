import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public ap:string = "" ;
  public bp:string = "" ;
  public textarea:any = "" ;
  catch(value:any){
    this.bp=value;
    
  }

}
