import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { IntroductionPageComponent } from './components/introduction-page/introduction-page.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    IntroductionPageComponent,
    MyProjectsComponent,
    ContactFormComponent,
  ],
  imports: [CommonModule],
  exports: [
    AboutMeComponent,
    IntroductionPageComponent,
    MyProjectsComponent,
    ContactFormComponent,
  ],
})
export class HomepageModule {}
