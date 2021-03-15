import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, Product} from "../../model/model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public innerWidth: any;
  products: Product[];
  ngOnInit(): void {
    this.innerWidth = document.documentElement.clientWidth;
    this.http.get('http://localhost:8080/product').subscribe( data =>{
        this.products = data as Product[]
        console.log(this.products)
    }
    )
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = document.documentElement.clientWidth;
  }

  submitOrder(order: Order) {
    this.http.post('http://localhost:8080/order/create',order).subscribe(data => {
      console.log(data)
    })
  }
}
