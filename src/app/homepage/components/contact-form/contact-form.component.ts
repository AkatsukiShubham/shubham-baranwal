import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openGitHub() {
    window.open('https://github.com/AkatsukiShubham/my_portfolio');
  }

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
