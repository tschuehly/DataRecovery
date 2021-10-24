/* tslint:disable:variable-name */
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
  note: string;
  trackingState: orderStateEnum;
  orderProduct: Product;
  customer: Customer;
  replacement: string;
  updateIdList: number[];
  updates: Update[];
  monthlyPayment: number;
  deadline: Date;
  completionDate: Date;
}
export enum orderStateEnum {
  orderReceived = 'Auftrag eingegangen',
  parcelReceived = 'Paket eingegangen',
  firstAnalysis = 'Erste Analyse',
  orderedFirstPartDispender = 'Bestellung erster Teilespender',
  orderedSecondPartDispender = 'Bestellung zweiter Teilespender',
  orderedThirdPartDispender = 'Bestellung dritter Teilespender',
  waitingForPinout = 'Warte auf Pinout',
  inRepair = 'Reparatur',
  readingMemory = 'Speicher wird ausgelesen',
  reRead = 'Speicher wird erneut ausgelesen (Reread)',
  savingData = 'Abspeicherung Dateien',
  storage = 'Einlagerung',
  parcelReturned = 'Rückversand',
  success = 'Datenrettung erfolgreich abgeschlossen',
  failure = 'Datenrettung nicht erfolgreich abgeschlossen',
  legacyComplete = 'Auftrag abgeschlossen'
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
  imageId: string;
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
  relative_time_description: string;
  text: string;
  time: number;
}
