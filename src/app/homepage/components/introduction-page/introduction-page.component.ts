import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.scss'],
})
export class IntroductionPageComponent implements OnInit {
  myName = ' Shubham Baranwal.';
  whatIDo = 'I build things for the web.';
  descriptionLabel =
    ' I’m a software developer and a freelancer from mumbai, India specializing in building (and occasionally designing) exceptional web pages and mobile apps.';
  constructor() {}

  ngOnInit(): void {}
}
