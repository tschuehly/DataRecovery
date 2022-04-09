import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, Order, Product } from '../../model/model';
import { GoogleAnalyticsService } from '../../services/google-analytics.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  orderSubmitted: boolean = null;
  products: Product[];
  flashProduct: Product[];
  categories: Category[];
  replacementProducts: Product[];
  ngOnInit(): void {
    this.http.get('api/product').subscribe((data) => {
      this.products = (data as Product[]).sort(
        (p1, p2) => p1.sequenceId - p2.sequenceId
      );
      this.replacementProducts = this.products.filter(
        (p) => p.category.replacement === true
      );
      this.products = this.products.filter(
        (p) => p.category.replacement === false
      );
      this.categories = this.products.map((p) => p.category);
      const categoryIds = this.categories.map((c) => c.id);
      this.categories = this.categories.filter(
        ({ id }, index) => !categoryIds.includes(id, index + 1)
      );
    });
  }

  submitOrder(order: Order): void {
    this.http.post('api/order/create', order).subscribe(
      (data) => {
        this.googleAnalyticsService.eventEmitter(
          'purchase',
          'ecommerce',
          'click',
          order.orderProduct.category.name + ' ' + order.orderProduct.name,
          1
        );
        this.orderSubmitted = true;
        setTimeout(function () {
          let orderSubmit = this.document.getElementById('order_submit');
          orderSubmit.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }, 200);
      },
      (error) => {
        this.orderSubmitted = false;
        console.log('Error Occured');
      }
    );
  }
}
