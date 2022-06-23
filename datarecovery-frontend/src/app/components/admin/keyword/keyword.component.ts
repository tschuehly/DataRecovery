import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeywordRankDTO } from 'src/app/dto/dto';

@Component({
  selector: 'app-keyword',
  template: `
    <div class="flex justify-center flex-col p-8 gap-3 ">
      <div class="flex justify-center flex-col">
        <h2 class="font-bold text-center text-xl underline mb-2">
          Aktueller Rang
        </h2>
        <table
          class="table-auto w-96 self-center"
          *ngIf="this.latestKeywordRankDTOs"
        >
          <thead>
            <th>Keyword</th>
            <th>Rang</th>
          </thead>
          <tbody>
            <ng-container
              *ngFor="let keywordRank of this.latestKeywordRankDTOs"
            >
              <tr>
                <td>{{ keywordRank.keyword }}</td>
                <td class="text-center">{{ keywordRank.rank }}</td>
              </tr>
            </ng-container>
          </tbody>
        </table>
      </div>
      <div class="w-full h-96">
        <ngx-charts-line-chart
          [legend]="legend"
          legendTitle="Keywords"
          [showXAxisLabel]="showXAxisLabel"
          [showYAxisLabel]="showYAxisLabel"
          [xAxis]="xAxis"
          [yAxis]="yAxis"
          xAxisLabel="Datum"
          yAxisLabel="Rang"
          [timeline]="timeline"
          [results]="chartData"
        ></ngx-charts-line-chart>
      </div>
    </div>
  `,
  styles: [],
})
export class KeywordComponent implements OnInit {
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;
  constructor(private http: HttpClient, private router: Router) {}

  keywordRankDTOs: KeywordRankDTO[];
  latestKeywordRankDTOs: KeywordRankDTO[];
  keywords: any[];

  chartData: any[];
  view: any[] = [700, 300];

  ngOnInit(): void {
    this.http.get('api/keyword-rank').subscribe(
      (response: KeywordRankDTO[]) => {
        console.log(response);
        this.keywordRankDTOs = response;
        this.keywords = [...new Set(response.map((item) => item.keyword))];
        this.chartData = this.keywords.map((keyword) => {
          return {
            name: keyword,
            series: response
              .filter((r) => r.keyword == keyword)
              .map((r) => {
                return {
                  name: new Date(r.requestTime),
                  value: r.rank,
                };
              }),
          };
        });
        console.log(this.chartData);
        this.latestKeywordRankDTOs = this.keywords.map((keyword) => {
          let map = new Map<String, KeywordRankDTO>();
          response.forEach((keywordRank) => {
            if (keywordRank.keyword == keyword) {
              if (map.get(keyword)) {
                if (map.get(keyword).requestTime < keywordRank.requestTime) {
                  map.set(keyword, keywordRank);
                }
              } else {
                map.set(keyword, keywordRank);
              }
            }
          });
          return map.get(keyword);
        });
        console.log(this.latestKeywordRankDTOs);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/b2b/login']);
        }
      }
    );
  }
  // options
}
