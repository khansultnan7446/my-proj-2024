import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    class: new FormControl('',[Validators.required]),
    fatherName: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    phone:new FormControl('', [Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    type: new FormControl(),
    // busFee: new FormControl(),
    // hostelfee: new FormControl()
    marks: new FormArray([])
  });
  get marksformarray() {
    return this.studentForm.get('marks') as FormArray;
  }
  addmarks(){
    this.marksformarray.push(
      new FormGroup({
        class : new FormControl(),
        year : new FormControl(),
        percentage : new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)])
      })
    )
  }
  delete(i:number){
    this.marksformarray.removeAt(i);
  }


  constructor() {
    this.studentForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'dayscholar') {
          this.studentForm.addControl("busfee", new FormControl());
          this.studentForm.removeControl("hostelfee");
        }

        else if (data == 'residential') {
          this.studentForm.addControl('hostelfee', new FormControl());
          this.studentForm.removeControl('busfee');
        }
      }
    )

  }
  submit() {
    console.log(this.studentForm.value);
    this.studentForm.reset();
  }
}