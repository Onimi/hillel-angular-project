import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  public name: string = 'Weather Widget';
  public constructor() { }

  ngOnInit() {
  }

}
