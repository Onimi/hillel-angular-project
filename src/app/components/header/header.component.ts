import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private defaultTitle: string = 'Header Title'
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.title = this.title || this.defaultTitle;
  }

}
