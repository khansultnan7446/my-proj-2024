import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BankaccountsService } from '../bankaccounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bankaccountadd',
  templateUrl: './bankaccountadd.component.html',
  styleUrls: ['./bankaccountadd.component.css']
})
export class BankaccountaddComponent {
  public id:string = "" ;
  public bankaccountaddform : FormGroup = new FormGroup({
      account_name :new FormControl(),
      available_balance : new FormControl(),
      account_number : new FormControl(),
      city : new FormControl()

    })
    constructor ( private  _bankaccountservice:BankaccountsService , private _activatedRoute:ActivatedRoute){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id);
          this.id=data.id;
          _bankaccountservice.getaccount(data.id).subscribe(
            (data:any)=>{
              this.bankaccountaddform.patchValue(data);
            }
          )
          

        }
      )
    }
    create(){
      console.log(this.bankaccountaddform);
      if(this.id){
        //  edit
        this._bankaccountservice.updateaccount(this.bankaccountaddform.value , this.id).subscribe(
          (data:any)=>{
            alert ('Update Account Succesfully !!!');
            this.bankaccountaddform.reset();
          },
          (err:any)=>{
            alert ('update account failed');
          }
        )
      }
      else{
        //  create
      }
      this._bankaccountservice.bankaccountadd(this.bankaccountaddform.value).subscribe(
        (data:any)=>{
          alert("created account succcesfully !!!!");
        },
      (err:any)=>{
        alert ("creation acclount failed!");
      }
      )}
    }