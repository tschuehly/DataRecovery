export class Customer{
  id: number;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  postalCode: number;
  city : string;
  street: string;
}
export class Order{
  id: number;
  trackingId: string;
  orderDate: Date;
  trackingState: string
  product: Product;
  customer: Customer[];
  replacement: string;
}

export class Product{
  id: number;
  category: string;
  name: string;
  price: number;
}
