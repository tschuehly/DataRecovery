import { Component } from '@angular/core';

@Component({
  selector: 'app-price-list',
  template: `
    <div
      class="text-xl bg-gray-main bg-circuit-board text-gray-50"
      id="priceList"
    >
      <h2
        class="py-8 text-3xl md:text-4xl tracking-wider text-center text-gray-50"
      >
        Ein Festpreis auch für komplexe Fälle
      </h2>

      <div
        class="container px-4 md:px-8 py-10 text-center break-words rounded-2xl text-lg"
      >
        <div
          class="bg-gray-main rounded-2xl"
          style="box-shadow: 0 2px 25px 0 black"
        >
          <div class="flex text-center">
            <div class="flex-1 rounded-tl-2xl">
              <picture>
                <source
                  srcset="/assets/index/usb.webp"
                  media="(min-width: 1024px)"
                />
                <source
                  srcset="/assets/index/usb_vertical.webp"
                  media="(min-width: 600px)"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover w-full h-full  rounded-tl-2xl"
                />
              </picture>
            </div>
            <div class="grid grid-cols-2 pb-4">
              <h2 class="col-span-2 p-4 text-xl md:text-2xl text">
                Defekte(r) USB Stick / (micro-) SD Karte
              </h2>
              <div class="p-4 leading-relaxed border-r border-white">
                <div>Festpreis</div>
                <div>50,00 €</div>
                <div>75,00 €</div>
                <div>150,00 €</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white">
                <div>Kapazität</div>
                <div>≤ 8 GB</div>
                <div>≤ 16 GB</div>
                <div>≤ 64 GB</div>
              </div>
            </div>
            <div class="flex-1 rounded-tr-2xl">
              <picture>
                <source
                  srcset="/assets/index/flash3.webp"
                  media="(min-width: 600px)"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover w-full h-full  rounded-tr-2xl"
                />
              </picture>
            </div>
          </div>
          <div class="h-8 bg-silver"></div>
          <div class="flex flex-col text-center md:flex-row">
            <div class="flex-1 ">
              <picture>
                <source
                  srcset="/assets/index/hdd_price.webp"
                  media="(min-width: 1024px)"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover md:w-full md:h-full"
                />
              </picture>
            </div>
            <div class="grid grid-cols-2 py-4">
              <h2 class="col-span-2 p-4 text-xl md:text-2xl text">
                Defekte HDD-Festplatte
              </h2>
              <div class="p-4 leading-relaxed border-r border-white">
                <div>Festpreis</div>
                <div>300,00 €</div>
                <div>350,00 €</div>
                <div>475,00 €</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white">
                <div>Kapazität</div>
                <div>≤ 1 TB</div>
                <div>≤ 2 TB</div>
                <div>≤ 4 TB</div>
              </div>
            </div>
            <div class="grid grid-cols-2 py-4">
              <h2 class="col-span-2 p-4 text-xl md:text-2xl text">
                Defekte SSD-Speicher (SATA-basiert)
              </h2>
              <div class="p-4 leading-relaxed border-r border-white">
                <div>Festpreis</div>
                <div>225,00 €</div>
                <div>250,00 €</div>
                <div>300,00 €</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white">
                <div>Kapazität</div>
                <div>≤ 512 GB</div>
                <div>≤ 1 TB</div>
                <div>≤ 2 TB</div>
              </div>
            </div>

            <div class="flex-1 ">
              <picture>
                <source
                  srcset="/assets/index/ssd_price.webp"
                  media="(min-width: 1024px)"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover md:w-full md:h-full"
                />
              </picture>
            </div>
          </div>
          <div class="h-8 bg-silver"></div>
          <div class="flex text-center">
            <div class="flex-1 ">
              <picture>
                <source
                  srcset="/assets/index/synology.webp"
                  media="(min-width: 862px)"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover w-full h-full"
                />
              </picture>
            </div>
            <div class="grid pb-4">
              <h2 class="p-4 text-xl md:text-2xl text">
                RAID & Apple Fusion Drive (iMac)
              </h2>
              <div class="px-4 pl-8 leading-relaxed text-left">
                abhängig von:
                <div>- Anzahl an Festplatten</div>
                <div>- Kapazität pro Festplatte</div>
                <div>- RAID Level</div>
                <div>- ggf. Beschädigung der Festplatten</div>
              </div>
            </div>

            <div class="flex-1 ">
              <picture>
                <source
                  srcset="/assets/index/raid_symbol.webp"
                  media="(min-width: 862px)"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover w-full h-full"
                />
              </picture>
            </div>
          </div>
          <div
            class="flex flex-col justify-between p-4 text-black md:flex-row bg-silver rounded-b-2xl"
          >
            <div class="self-center text-base">
              Alle angegebenen Preise sind bereits inklusive 19% Mehrwertsteuer.
            </div>

            <td class="flex justify-end pt-4">
              <button
                class="px-4 py-2 text-lg md:text-xl text-white rounded shadow bg-gray-main"
              >
                <a href="preise">weitere Kapazitäten</a>
              </button>
            </td>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class PriceListComponent {
  constructor() {}
}