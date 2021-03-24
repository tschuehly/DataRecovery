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
export class Product{
  constructor(public id: number = 0,
              public category: string = "",
              public name: string = "",
              public price: number  = 0,
              public createDate: String = new Date().toISOString().substring(0,19)
  ) {}
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
