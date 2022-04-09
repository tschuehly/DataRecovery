/* eslint-disable @typescript-eslint/naming-convention, no-underscore-dangle, id-blacklist, id-match */
export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  tel: string;
  email: string;
  postalCode: number;
  city: string;
  street: string;
}
export class Order {
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
  orderReceivedReminderSent = 'Warte auf Ankunft / Erinnerung',
  parcelReceived = 'Paket eingegangen',
  firstAnalysis = 'Erste Analyse',
  orderedFirstPartDispenser = 'Bestellung erster Teilespender',
  orderedSecondPartDispenser = 'Bestellung zweiter Teilespender',
  orderedThirdPartDispenser = 'Bestellung dritter Teilespender',
  waitingForPinout = 'Warte auf Pinout',
  inRepair = 'Reparatur',
  readingMemory = 'Speicher wird ausgelesen',
  reRead = 'Speicher wird erneut ausgelesen (Reread)',
  savingData = 'Abspeicherung Dateien',
  storage = 'Einlagerung',
  parcelReturned = 'Rückversand',
  success = 'Datenrettung erfolgreich abgeschlossen',
  failure = 'Datenrettung nicht erfolgreich abgeschlossen',
  legacyComplete = 'Auftrag abgeschlossen',
}
export class Update {
  id: number;
  title: string;
  description: string;
  date: Date;
  pictures: Picture[];
}
export class Picture {
  name: string;
  type: string;
  id: number;
  imageId: string;
}
export class Product {
  constructor(
    public id: number = 0,
    public category: Category,
    public name: string = '',
    public price: number = 0,
    public createDate: string = new Date().toISOString().substring(0, 19),
    public sequenceId: number
  ) {}
}

export class Category {
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

export class ReviewDetailDTO {
  rating: number;
  userRatingsCount: Number;
}
