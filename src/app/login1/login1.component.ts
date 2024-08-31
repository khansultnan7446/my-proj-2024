import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {
public loginform:FormGroup=new FormGroup({
  email: new FormControl(),
  password: new FormControl()
})
constructor(private _loginsservice:LoginsService){}


login(){
this._loginsservice.login(this.loginform.value).subscribe(

  (data:any)=>{
    alert("Login success")
  },
  (err:any)=>{
    alert('Login failed')
  }

  )
}



}