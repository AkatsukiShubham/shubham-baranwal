import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('yes');

    AOS.init();
  }
}
