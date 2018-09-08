import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  private defaultTitle: string = 'Header Title'
  @Input() title: string;

  constructor() { }

  ngOnInit() {
    this.title = this.title || this.defaultTitle;
  }

}
