import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class WeatherWidgetComponent implements OnInit {
  public name: string = 'Weather Widget';
  public constructor() { }

  ngOnInit() {
  }

}
