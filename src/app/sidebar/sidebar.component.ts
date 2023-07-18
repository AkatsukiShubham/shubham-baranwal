import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openInNewTab(value: any) {
    if (value == 'instagram') {
      window.open('https://www.instagram.com/__shubham_baranwal__/');
    } else if (value == 'twitter') {
      window.open('https://twitter.com/akatsukishubham');
    } else if (value == 'linkedin') {
      window.open('https://www.linkedin.com/in/shubham-baranwal-7638691a1/');
    }
  }
}
