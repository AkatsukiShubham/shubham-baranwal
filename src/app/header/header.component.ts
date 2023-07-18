import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerTabs: any = [
    { value: '01', label: 'About' },
    { value: '02', label: 'Experience' },
    { value: '03', label: 'Works' },
    { value: '04', label: 'Contact' },
  ];
  windowScrolled: boolean = false;
  hideMenu: boolean = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 10) {
      this.windowScrolled = true;
      this.hideMenu = true;
    } else if (document.documentElement.scrollTop < 10) {
      this.windowScrolled = false;
      this.hideMenu = true;
    }
  }

  ngOnInit(): void {}

  hideMobileMenu(value: any) {
    this.hideMenu = value;
  }
}
