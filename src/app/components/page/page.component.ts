import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  private defaultTitle: string = 'Page Title';
  @Input() public title: string;

  public constructor() { }

  ngOnInit() {
    this.title = this.title || this.defaultTitle;
  }
}
