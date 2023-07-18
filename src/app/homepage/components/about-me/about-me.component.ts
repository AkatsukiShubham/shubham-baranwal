import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  skillsArrayLeft: any = [
    { value: 'Angular' },
    { value: 'Ionic' },
    { value: 'HTML' },
    { value: 'Bootstrap' },
    { value: 'Wordpress' },
  ];

  skillsArrayRight: any = [
    { value: 'Javascript' },
    { value: 'Typescript' },
    { value: 'Css' },
    { value: 'JQuery' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
