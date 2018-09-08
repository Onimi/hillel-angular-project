import { Component, OnInit } from '@angular/core';

import { Link } from '../../models/link';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.css']
})
export class PageFooterComponent implements OnInit {
  public links: Link[] = [
    {
      target: '_blank',
      rel: 'noopener',
      href: 'https://angular.io/tutorial',
      text: 'Tour of Heroes'
    },
    {
      target: '_blank',
      rel: 'noopener',
      href: 'https://github.com/angular/angular-cli/wiki',
      text: 'CLI Documentation'
    },
    {
      target: '_blank',
      rel: 'noopener',
      href: 'https://blog.angular.io/',
      text: 'Angular blog'
    },
  ];

  public constructor() { }

  ngOnInit() {
  }

}
