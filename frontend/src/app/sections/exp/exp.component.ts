import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { CommonModule, DOCUMENT, ViewportScroller, isPlatformBrowser } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//gsap.registerPlugin(ScrollTrigger);

interface Card {
  title: string;
 
  svgPath: string;
  content:string[];
}

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.css',
})


export class ExpComponent implements OnInit {
  isBrowser: boolean;

   // Cards data stored in the component
   cards: Card[] = [
    {
      title: 'Certification: AI Tools',
      svgPath: 'assets/logo/certification-award-svgrepo-com.svg',
      content:[ 'Certified in AI tools by be10x, where I gained expertise in various tools designed to simplify and streamline everyday tasks effectively.'],
    },
    {
      title: 'Work: Freelancer',
      svgPath: 'assets/logo/work-on-laptop-study-student-employee-svgrepo-com.svg',
      content: [
        'Specialized in prompt writing for AI platforms and communities.',
        'Delivered tailored prompts designed to enhance user engagement.',
        'Conducted comprehensive user testing to assess web applications.',
        'Provided detailed, actionable feedback to clients.',
      ],
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initAnimations();
      this.adjustContainerHeight();
    }
  }

  initAnimations(): void {
    const card1 = document.querySelector('.card1') as HTMLElement;
    const card2 = document.querySelector('.card2') as HTMLElement;
  
    if (card1 && card2) {
      gsap.timeline({
        scrollTrigger: {
          trigger: card1,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
          onEnter: () => {
            card2.style.zIndex = '3';
            card2.classList.add('show'); // Show card 2
          },
          onLeaveBack: () => {
            card2.classList.remove('show'); // Hide card 2 when scrolling back
          }
        },
      })
      .to(card2, {
        duration: 1,
        ease: 'power1.inOut',
      });
    }
  }
  
  
  adjustContainerHeight(): void {
    const container = document.getElementById('exp-container');
    const cards = document.querySelectorAll<HTMLElement>('.card');
  
    if (container && cards.length > 0) {
      // Find the maximum height of all cards
      let maxHeight = 0;
      cards.forEach((card) => {
        maxHeight = Math.max(maxHeight, card.scrollHeight);
      });
  
      // Apply the maximum height to all cards
      cards.forEach((card) => {
        card.style.height = `${maxHeight}px`;
      });
  
      // Adjust container height to fit all cards
      const verticalPadding = 20; // Add equal top and bottom padding
      const totalHeight = maxHeight * cards.length + 20 * (cards.length - 1); // Add spacing between cards
      container.style.height = `${totalHeight + verticalPadding * 2}px`;
      container.style.paddingTop = `${verticalPadding}px`;
      container.style.paddingBottom = `${verticalPadding}px`;
  
      // Refresh GSAP ScrollTrigger to reflect the changes
      ScrollTrigger.refresh();
    }
  }
  
  
}
