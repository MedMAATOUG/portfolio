import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public scrollTo(section: string): void {
    this.viewportScroller.scrollToAnchor(section);
  }

  public openResume(): void {
    window.open('./assets/Maatoug Mohamed Resume.pdf');
  }

  public goToLinkedin(): void {
    window.open('https://www.linkedin.com/in/mohamed-maatoug/', '_blank');
  }

  public goToGithub(): void {
    window.open('https://github.com/MedMAATOUG', '_blank');
  }
}
