import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-static',
  templateUrl: 'static.component.html',
  styles: []
})
export class StaticComponent implements OnInit {
  variant;

  constructor(private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(value => {
      this.variant = value.variant;
    });
  }

}
