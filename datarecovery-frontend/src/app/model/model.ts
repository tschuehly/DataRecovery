export class Customer{
  id: number;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  postalCode: number;
  city: string;
  street: string;
}
export class Order{
  id: number;
  trackingId: string;
  orderDate: Date;
  trackingState: orderStateEnum;
  product: Product;
  customer: Customer;
  replacement: string;
  updates: Update[];
}
export enum orderStateEnum {
  orderReceived = 'Auftrag eingegangen',
  parcelReceived = 'Paket eingegangen',
  firstAnalysis = 'Erste Analyse',
  orderedReplacementParts = 'Bestellung Ersatzteile',
  inRepair = 'Reparatur',
  readingMemory = 'Auslesen Speicher',
  savingData = 'Abspeicherung Dateien',
  parcelReturned = 'Rückversand'
}
export class Update{
  description: string;
  pictures: File[];
}
export class Product{
  constructor(public id: number = 0,
              public category: Category ,
              public name: string = '',
              public price: number  = 0,
              public createDate: string = new Date().toISOString().substring(0, 19)
  ) {}
}

export class Category{
  id: string;
  name: string;
  title: string;
  description: string;
  replacement: boolean;
}

export class Credentials {
  username: string;
  password: string;
}
export class User {
  id: number;
  username: string;
  role: string;
  email: string;
}
