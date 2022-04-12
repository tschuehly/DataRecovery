import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) {

   }

   scrollToOrder(): void {
    this.router.navigate(['']).then((_) => {
      setTimeout(function () {
        let orderForm = document.getElementById('order_form');
        orderForm.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 200);
    });
  }
  }
