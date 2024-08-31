import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  public baseUrl:string = 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';

  constructor(private _httpClient:HttpClient) { }
  getvehicles():Observable<any>{
    
    return this._httpClient.get(this.baseUrl);
  }
  
  getvehicle(id:string):Observable<any>{
    
    return this._httpClient.get(this.baseUrl+'/' +id);
  }
  
  
  getfilterredvehicles(term:string):Observable<any>{
    
    return this._httpClient.get(this.baseUrl+'?filter=' + term);
  }
  getSortedvehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy=" + column+ "&order=" + order);

}
getpaginationvehicles(page1:number,page2:number):Observable<any>{
  return this._httpClient.get(this.baseUrl+"?limit="+page1+'&page='+page2);
}
createvehicle(data:any):Observable<any>{
  return this. _httpClient.post(this.baseUrl , data);
}
deletevehicle(id:string):Observable<any>{
  return this._httpClient.delete(this.baseUrl+"/"+id);
}
updatevehicle(data:any,id:string):Observable<any>{
  return this. _httpClient.post(this.baseUrl+'/', id, data);
}
}
