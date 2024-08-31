import { Component } from '@angular/core';
import { BankaccountsService } from '../bankaccounts.service';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent {
public bankaccount:any = [];
constructor (private _bankaccountservice:BankaccountsService, private _router:Router){
  _bankaccountservice.getbankaccounts().subscribe(
    (data:any)=>{
      this.bankaccount = data;
    },
    (err:any)=>{
      alert ('internal server error');
    }
  )
}
view(id:string){
  this._router.navigateByUrl('dashboard/viewaccount/'+id);
}
edit (id:string){
  this._router.navigateByUrl('dashboard/editaccount/'+id);
}
}
