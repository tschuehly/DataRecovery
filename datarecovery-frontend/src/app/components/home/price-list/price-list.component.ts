import { Component } from '@angular/core';

@Component({
  selector: 'app-price-list',
  template: `
    <div
      class="text-xl bg-gray-main bg-circuit-board text-gray-50"
      id="priceList"
    >
      <h2
        class="pt-10 py-4 text-2xl md:text-3xl tracking-wider text-center text-gray-50"
      >
      <a class="underline" href="preise">Festpreise "schwierige" Fälle</a>:
      </h2>

      <div
        class="container px-4 md:px-8 py-8 text-center break-words rounded-2xl"
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
              <h2 class="col-span-2 p-4  text-xl">
                Defekte(r) USB Stick / (micro-) SD Karte
              </h2>
              <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">Speichergröße</div>
                <div>≤ 16 GB</div>
                <div>≤ 64 GB</div>
                <div>≤ 128 GB</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2">Festpreis¹</div>
              <div>99,00 €</div>
              <div>149,00 €</div>
              <div>249,00 €</div>
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
              <h2 class="col-span-2 p-4 text-xl">
                Beschädigte HDD-Festplatte
              </h2>
              <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">Speichergröße</div>
                <div>≤ 1 TB</div>
                <div>≤ 2 TB</div>
                <div>≤ 4 TB</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2">Festpreis¹ </div>
                <div>349,00 €</div>
                <div>399,00 €</div>
                <div>499,00 €</div>
              </div>
            </div>
            <div class="grid grid-cols-2 py-4">
              <h2 class="col-span-2 p-4 text-xl">
                Defekter SSD-Speicher (SATA-basiert)
              </h2>
              <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">Speichergröße</div>
              <div>≤ 1 TB</div>
              <div>≤ 2 TB</div>
              <div>≤ 4 TB</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2">Festpreis¹</div>
              <div>299,00 €</div>
              <div>349,00 €</div>
              <div>449,00 €</div>
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
              <h2 class="p-4 text-xl">
                NAS / RAID, Apple Fusion Drive
              </h2>
              <div class="px-4 py-2 pl-8 leading-relaxed text-left text-base md:text-lg">
                abhängig von:
                <div>- Anzahl an Festplatten</div>
                <div>- Kapazität pro Festplatte</div>
                <div>- RAID Level</div>
                <div>- ggf. Reparatur einzelner Festplatten</div>
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
<div class="justify-start text-base md:text-lg">
¹Alle angegebenen Festpreise sind bereits inklusive 19% Mehrwertsteuer
<td>+ Kosten entstehen nur bei Erfolg.</td></div>
            <td class="flex justify-end pt-4">
              <button
                class="px-4 py-2 text-lg md:text-xl text-white rounded shadow bg-gray-main"
              >
                <a href="preise">weiter zu "einfache" Fälle</a>
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
