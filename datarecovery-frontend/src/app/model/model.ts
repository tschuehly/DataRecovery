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
  orderProduct: Product;
  customer: Customer;
  replacement: string;
  updateIdList: number[];
  updates: Update[];
  monthlyPayment: number;
}
export enum orderStateEnum {
  orderReceived = 'Auftrag eingegangen',
  parcelReceived = 'Paket eingegangen',
  firstAnalysis = 'Erste Analyse',
  orderedReplacementParts = 'Bestellung Ersatzteile',
  inRepair = 'Reparatur',
  readingMemory = 'Auslesen Speicher',
  savingData = 'Abspeicherung Dateien',
  parcelReturned = 'Rückversand',
  orderCompleted = 'Auftrag abgeschlossen'
}
export class Update{
  id: number;
  description: string;
  date: Date;
  pictures: Picture[];
}
export class Picture{
  name: string;
  type: string;
  id: number;
  data: File;
}
export class Product{
  constructor(public id: number = 0,
              public category: Category ,
              public name: string = '',
              public price: number  = 0,
              public createDate: string = new Date().toISOString().substring(0, 19),
              public sequenceId: number
  ) {}
}

export class Category{
  id: string;
  name: string;
  title: string;
  description: string;
  replacement: boolean;
  questions: string[];
  sequenceId: number;
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
export class Review{
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: String
  text: string;
  time: number;
}
