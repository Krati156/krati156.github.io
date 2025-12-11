import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppContentComponent } from './app-content/app-content/app-content.component';
import { CompanySectionComponent } from './company-section/company-section.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { After } from 'v8';
import { BusinessSectionComponent } from './business-section/business-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [AppHeaderComponent, AppContentComponent, CompanySectionComponent, BusinessSectionComponent]
})
export class AppComponent {
  title = 'uzofin_ai_banking';

}
