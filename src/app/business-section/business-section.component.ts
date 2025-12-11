import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-business-section',
  imports: [CommonModule],
  templateUrl: './business-section.component.html',
  styleUrl: './business-section.component.scss'
})
export class BusinessSectionComponent implements AfterViewInit{
  images = [
    '/../../assets/images/ProStateperty-1.jpg',
    '/../../assets/images/ProStateperty-2.jpg',
    '/../../assets/images/ProStateperty-3.jpg'
  ];

  ngAfterViewInit(): void {
     gsap.to('.spiral-line', {
      rotation: 360,       // full spin
      scale: 1,          // grow bigger
      duration: 10,
      repeat: -1,          // infinite loop
      yoyo: true,          // go back to original size
      ease: 'expo.inOut',
      // stagger: 0.3 
    });
  }
}
