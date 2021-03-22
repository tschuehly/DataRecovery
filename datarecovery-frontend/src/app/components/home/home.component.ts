import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category, Order, Product} from '../../model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  public innerWidth: any;
  orderSubmitted: boolean = null;
  products: Product[];
  categories: Category[];
  replacementProducts: Product[];
  ngOnInit(): void {
    this.innerWidth = document.documentElement.clientWidth;
    this.http.get('api/product').subscribe( data => {
        this.products = data as Product[];
        console.log(this.products);
        this.replacementProducts = this.products.filter(p => p.category.replacement === true);
        this.products = this.products.filter(p => p.category.replacement === false);

        this.categories = this.products.map(p => p.category);
        const categoryIds = this.categories.map(c => c.id);
        this.categories = this.categories.filter(({id}, index) => !categoryIds.includes(id, index + 1));

    });

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
