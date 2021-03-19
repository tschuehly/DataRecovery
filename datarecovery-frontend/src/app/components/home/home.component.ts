import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order, Product} from '../../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public innerWidth: any;
  orderSubmitted: boolean = null;
  products: Product[];
  replacementProducts: Product[];
  ngOnInit(): void {
    this.innerWidth = document.documentElement.clientWidth;
    this.http.get('api/product').subscribe( data => {
        this.products = data as Product[];
        console.log(this.products);
        this.replacementProducts = this.products.filter(p => p.category === 'replacement');
        this.products = this.products.filter(p => p.category !== 'replacement');
    }
    );
  }
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = document.documentElement.clientWidth;
  }

  submitOrder(order: Order): void {
    this.http.post('api/order/create', order).subscribe((data: boolean) => {
      this.orderSubmitted = data === true;
    }, error => this.orderSubmitted = false);
  }
}
