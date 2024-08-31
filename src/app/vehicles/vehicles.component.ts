import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  public vehicles: any = [];
  public term: string = '';
  public column: string = "";
  public order: string = "";
  public page1: number = 0;
  public page2: number = 0;
  constructor(private _vehicleService: VehicleService,private _router:Router) {
    _vehicleService.getvehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  filter() {
    this._vehicleService.getfilterredvehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  sort() {
    this._vehicleService.getSortedvehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  limit() {
    this._vehicleService.getpaginationvehicles(this.page1, this.page2).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    )
  }
  delete(id: string) {
    this._vehicleService.deletevehicle(id).subscribe(
      (data: any) => {
        alert('delete succussfully!!!!');
        location.reload();
      },
      (err: any) => {
        alert('deletion failed');
      }
    )
  }
  view(id:string){
    this._router.navigateByUrl('/dashboard/view-vehicle/'+id);
  }
  edit(id:string){
    this._router.navigateByUrl('dashboard/edit-vehicle/'+id)
  }
}
