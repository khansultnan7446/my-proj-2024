import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankaccountsService } from '../bankaccounts.service';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent {
  public bankaccount:any={};
  constructor(private _activatedRoute:ActivatedRoute,private _bankaccountService:BankaccountsService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _bankaccountService.getbankaccount(data.id).subscribe(
          (data:any)=>{
            this.bankaccount=data;
          }
      
        )
      }
      
      
    )
  }

}
