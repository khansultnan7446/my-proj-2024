import { state } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-pipes',
  templateUrl: './directives-pipes.component.html',
  styleUrls: ['./directives-pipes.component.css']
})
export class DirectivesPipesComponent {
  public ages: number[] = [10, 20, 30, 40, 50];
  public states: string[] = ['Telangana', 'Andhra', 'Karnataka', 'Kerala'];
  public user: any = [
    { name: 'a', age: 20, phone: 9494 },
      { name: 'a', age: 30, phone: 8494 },
      { name: 'a', age: 40, phone: 7494 },
      { name: 'a', age: 50, phone: 6494 }
  ];
  public today:any=new Date();
}


