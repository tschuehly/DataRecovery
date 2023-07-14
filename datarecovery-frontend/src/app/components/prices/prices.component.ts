import { Component, OnInit } from '@angular/core';
import { Category, Product } from '../../model/model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-prices',
  template: `
    <div
      class="bg-center bg-gray-main bg-cover bg-no-repeat "
      style="background-image: url('/assets/prices_header.jpg')"
    >
    <div class="flex md:ml-80 justify-center md:justify-start ">
        <span
          class="text-2xl md:text-4xl  leading-relaxed text-center bg-gray-main p-7" >

          <div
                class="font-semibold pt-4 md:mt-0 mb-2 text-2xl md:text-3xl text-center text-gray-50"
              >
                Kontakt
              </div>
              <p
                class=" text-center text-lg md:text-xl text-white"
              >
                E-Mail:
                <a href="mailto:info@jungbauerdatenrettung.de"
                  >
                  <span class="text-white"
                    >info@jungbauerdatenrettung.de</span
                  ></a
                ><br />

                Telefon: <span class="text-white"><a href="tel:0841 12840705">0841 12840705</a></span><br />

                Mobil: <span class="text-white"><a href="tel:0151 61408355">0151 61408355</a></span>
              </p>
       
          </span>
      </div>
    </div>
    <div class="bg-white text-center">
      <h1 class="text-2xl md:text-4xl text-black py-5 tracking-wider">
      Datenrettung Preise / Kosten
      </h1>
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2  border-b-2 border-t-2">
      <div class="text-white text-base md:text-lg">
        <div
          class="bg-gray-main px-4 py-12"
          style=" 0 2px 25px 0 black"
        >
        <h2 class="font-bold text-xl md:text-2xl text-white"
            >Festpreise Datenrettung (nach Erfolg):</h2
          >
          <ng-container *ngFor="let category of categories">
            <div class="mb-2">
              <h2 class="font-semibold text-base md:text-lg mt-4 py-2 pb-2">
                {{ category.title }}
              </h2>
              <h2 class="whitespace-pre-wrap text-base md:text-lg" *ngIf="category.description">
                {{ category.description }}
              </h2>
              <ng-container *ngFor="let product of products">
                <h2 class="text-base md:text-lg"
                  *ngIf="product.category.id === category.id && product.price"
                >
                  {{ category.name }} {{ product.name }}
                  <span class="whitespace-nowrap"
                    >{{ product.price | number: '.2':'de' }} €</span
                  >
                </h2>
              </ng-container>
              
            </div>
          </ng-container>
          <br/>Alle Preise sind bereits inklusive 19% Mehrwertsteuer.
          <br/>
          <br/>
          
          
          <br/>

        <h2 class="font-bold text-xl md:text-2xl text-white pb-2"
        >Alleinstellungsmerkmal: Festpreise ohne versteckte Kosten</h2>
        
        Alle Kosten, z.B. auch Teilespender oder Leihdatenträger, sind bereits im Festpreis inklusive.<br/>
        Es handelt sich um Endpreise. Es kommen keine weitere Kosten zur Datenrettung hinzu.
        <br/>

        <br/>Bei Misserfolg entstehen inkl. Rückversand des Originalspeichers keine Kosten.
        <br/>
        Als Erfolg gilt: 95%+ oder nach Ferneinsicht die Bestätigung der Übernahme der Datenrettung.
        <br/><br/>
        Marktüblich in der Datenrettung sind im Kontrast untransparente "ab X€" Preise (tatsächliche Preise bis zu 5x höher) oder<br/>
        die Anteilhabe von "Intialisierungskosten", "Analysekosten" oder "Teilespenderkosten" auch bei Misserfolg.<br/>
        <br/>Sie zahlen mit den Preisen, unabhängig der Wichtigkeit der Daten, einen fair errechneten Mittelwert des Datenrettungsaufwandes. <br/>
        <br/>
        <br/>
        <br/>
        
        
          <div class="flex justify-end pt-8">
         
            <button
              class="text-base md:text-xl bg-white py-3 px-4 shadow rounded text-black"
              (click)="this.scrollService.scrollToOrder()"
            >
            ➔ zum Auftragsformular
            </button>
            <br/>
          </div>
        </div>
      </div>

      <div
        class="bg-gray-main bg-cover bg-center"
        style="background-image:url('/assets/prices_main.jpg')"
      ></div>
    </div>
  `,
  styles: [],
})
export class PricesComponent implements OnInit {
  products: Product[];
  flashProduct: Product[];
  categories: Category[];

  constructor(private http: HttpClient, public scrollService: ScrollService) {}

  ngOnInit(): void {
    this.http.get('api/product').subscribe((data) => {
      this.products = data as Product[];
      this.products = this.products.filter(
        (p) => p.category.replacement !== true
      );
      this.products.sort((p1, p2) => p1.sequenceId - p2.sequenceId);
      this.categories = this.products.map((p) => p.category);
      const categoryIds = this.categories.map((c) => c.id);
      this.categories = this.categories.filter(
        ({ id }, index) => !categoryIds.includes(id, index + 1)
      );
      this.categories.sort((c1, c2) => c1.sequenceId - c2.sequenceId);
      console.log(this.categories);
    });
  }
}
