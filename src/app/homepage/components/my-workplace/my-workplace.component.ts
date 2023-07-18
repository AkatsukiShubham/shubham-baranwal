import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-workplace',
  templateUrl: './my-workplace.component.html',
  styleUrls: ['./my-workplace.component.scss'],
})
export class MyWorkplaceComponent implements OnInit {
  aiezeCompanyRole: any = [
    {
      para: 'Delivering high-quality, robust production code for a diverse array of projects for clients including Assam State Government, Delhi Medical Government and more',
    },
    {
      para: 'Developing and integrating logical implementations of various web applications as well as mobile applications using frameworks like angular and ionic',
    },
    {
      para: 'Architecting and implementing the user interface of web apps and mobile apps using HTML, CSS and Javascript',
    },
  ];

  salttechCompanyRole: any = [
    {
      para: 'Developed, maintained, and shipped production code for client websites primarily using Angular, Javascript, HTML, CSS, Sass, Bootstrap, and jQuery',
    },
    {
      para: 'Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across the projects',
    },
    {
      para: 'Integrated and Implemented product architecturing for the projects',
    },
    {
      para: 'Clients included Dovetail, Sozo, Befulfilled, Beny, and more',
    },
  ];

  sterlingArcusCompanyRole: any = [
    {
      para: 'Integrated designs and implemented business logical integrations on wordpress projects to create woo-commerce and e-commerce websites for the organization',
    },
    {
      para: 'Build and Developed clothing websites, university websites using HTML, CSS, JQuery and wordpress',
    },
    {
      para: 'Developed plugins to work with wordpress environment',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  openCompanyWebsites(value: any) {
    if (value == 'Aieze') {
      window.open('https://www.aieze.in');
    } else if (value == 'salttech_solution') {
      window.open('https://salt-tech.com');
    }
  }
}
