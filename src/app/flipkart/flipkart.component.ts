import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  public flipkarts = [
    { productName: 'pen', price: 20, rating: 3, freedelivery: true },
    { productName: 'phone', price: 100, rating: 2, freedelivery: false },
    { productName: 'shirt', price: 400, rating: 4, freedelivery: true },
    { productName: 'cap', price: 200, rating: 5, freedelivery: false },
    { productName: 'mobile case', price: 300, rating: 4, freedelivery: true },
    { productName: 'remote', price: 400, rating: 2.5, freedelivery: false },
  ];
  public term: string = "";
  filter() {
    this.flipkarts = this.flipkarts.filter((flipkart) => flipkart.productName.includes(this.term))
  }
only(){
  

}
priceL(){

}
priceH(){

}
ratingL(){

}
ratingH(){
  
}
Discount(){

}
delivery(){

}
Total()
{

}
TotalCartItem(){

}

}
