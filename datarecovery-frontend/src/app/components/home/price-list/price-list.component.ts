import { Component } from '@angular/core';

@Component({
  selector: 'app-price-list',
  template: `
    <div
      class="text-xl bg-gray-main bg-circuit-board text-gray-50"
      id="priceList"
    >
      <h2
        class="pt-10 py-6 text-2xl md:text-3xl tracking-wider text-center text-gray-50"
      >
      <a class="underline" href="preise">Datenrettung Festpreise</a>:
      </h2>

      <div
        class="container px-4 py-8 text-center break-words rounded-2xl"
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
            <div class="grid grid-cols-2 py-4 pb-4">
              <h2 class="col-span-2 p-4 text-xl">
              USB Stick / (micro-) SD Karte / CF Karte 
              </h2>
              <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">"einfacher" Fall <a href="/datenrettung/einschätzung-usb+sd" target="_blank">ⓘ</a></div>
                <div>≤ alle Größen</div>
                
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2"><br/></div>
              <div>59,00 €</div>
              
            </div>
              <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">komplexer Fall <a href="/datenrettung/einschätzung-usb+sd" target="_blank">ⓘ</a></div>
                <div>≤ 16 GB</div>
                <div>≤ 64 GB</div>
                <div>≤ 128 GB</div>
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2"><br/></div>
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
                  alt="SD-Karte Rettung"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover w-full h-full  rounded-tr-2xl"
                />
              </picture>
            </div>
          </div>
          <div class="h-1 bg-white"></div>









          <div class="flex text-center">
          <div class="flex-1">
            <picture>
                <source
                  srcset="/assets/index/hdd_price.webp"
                  media="(min-width: 1024px)"
                  alt="Festplatte Datenrettung"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  alt="Image"
                  class=" object-cover md:w-full md:h-full"
                />
              </picture>
          </div>
          <div class="grid grid-cols-2 py-4 pb-4">
            <h2 class="col-span-2 p-4 text-xl">
            HDD - Festplatte
            </h2>
            <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">"einfacher" Fall <a href="/datenrettung/einschätzung-hdd" target="_blank">ⓘ</a></div>
                <div>≤ alle Größen</div>
              
                </div>
                <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
                <div class="pb-2"><br/></div>
                <div>249,00 €</div>
            
                </div>
                <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
                <div class="pb-2">komplexer Fall <a href="/datenrettung/einschätzung-hdd" target="_blank">ⓘ</a></div>
                  <div>≤ 1 TB</div>
                  <div>≤ 2 TB</div>
                  <div>≤ 4 TB</div>
                  
                </div>
                <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
                <div class="pb-2"><br/></div>
                  <div>425,00 €</div>
                  <div>499,00 €</div>
                  <div>649,00 €</div>
                  
                </div>
          </div>
          <div class="flex-1">
          <picture>
          <source
            srcset="/assets/index/hdd.webp"
            media="(min-width: 1024px)"
            alt="externe HDD Datenrettung"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="Image"
            class=" object-cover md:w-full md:h-full"
          />
        </picture>
          </div>
        </div>

        <div class="h-1 bg-white"></div> 



<div class="flex text-center">
          <div class="flex-1">
          <picture>
          <source
            srcset="/assets/index/ssd_price.webp"
            media="(min-width: 1024px)"
            alt="SSD Datenrettung"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="Image"
            class=" object-cover md:w-full md:h-full"
          />
        </picture>

          </div>
          <div class="grid grid-cols-2 py-4 pb-4">
            <h2 class="col-span-2 p-4 text-xl">
                SSD - Speicher
              </h2>

            <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">"einfacher" Fall <a href="/datenrettung/einschätzung-ssd" target="_blank">ⓘ</a></div>
                <div>≤ alle Größen</div>
                
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2"><br/></div>
              <div>299,00 €</div>
              
            </div>
              <div class="p-4 leading-relaxed border-r border-white text-lg md:text-xl">
              <div class="pb-2">komplexer Fall <a href="/datenrettung/einschätzung-ssd" target="_blank">ⓘ</a></div>
              <div>≤ 1 TB</div>
              <div>≤ 2 TB</div>
              <div>≤ 4 TB</div>
              
              </div>
              <div class="p-4 leading-relaxed border-l border-white text-lg md:text-xl">
              <div class="pb-2"><br/></div>
              <div>399,00 €</div>
              <div>499,00 €</div>
              <div>699,00 €</div>
              
              </div>

          </div>
          <div class="flex-1">
          <picture>
          <source
            srcset="/assets/index/ssd.webp"
            media="(min-width: 1024px)"
            alt="M2 Datenrettung"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            alt="Image"
            class=" object-cover md:w-full md:h-full"
          />
        </picture>
          </div>
        </div>
          <div class="h-1 bg-white"></div>
          <div class="flex text-center">
            <div class="flex-1 ">
              <picture>
                <source
                  srcset="/assets/index/RAID.webp"
                  media="(min-width: 862px)"
                  alt="RAID Datenrettung"
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
                RAID & NAS
              </h2>
              <div class="px-4 py-2 pl-8 leading-relaxed text-left text-base md:text-lg">
                abhängig von:
                <div>- RAID Level</div>
                <div>- Anzahl an Festplatten</div>
                <div>- Kapazität pro Festplatte</div>
                <div>- ggf. Schäden einzelner Speicher</div>
              </div>
            </div>

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
          </div>
          <div
            class="p-4 text-black md:flex-row bg-silver rounded-b-2xl"
          >
          
          
                  
<div class=" text-base text-right md:text-lg">
<button
                    class="px-4 py-2 text-right text-white rounded shadow bg-gray-main" >
                   <a href="/datenrettung/preise" >
                  weitere Größen </a>
                  </button> 
</div>

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
