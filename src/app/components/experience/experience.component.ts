import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ExperienceItem } from '../../models/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [NgOptimizedImage, CommonModule],
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public experienceItems: ExperienceItem[] = [
    { name: 'MySQL', src: './assets/technologies/mysql.png' },
    { name: 'Aws', src: './assets/technologies/aws.png' },
    { name: 'Javascript', src: './assets/technologies/js.png' },
    { name: 'Typescript', src: './assets/technologies/ts.png' },
    { name: 'Angular', src: './assets/technologies/angular.png' },
    { name: 'React', src: './assets/technologies/react.png' },
    { name: 'Devextreme', src: './assets/technologies/devextreme.png' },
    { name: 'material', src: './assets/technologies/material.png' },
    { name: 'Next.js', src: './assets/technologies/next.png' },
    { name: 'HTML', src: './assets/technologies/html.png' },
    { name: 'CSS', src: './assets/technologies/css.png' },
    { name: 'Bootstrap', src: './assets/technologies/bootstrap.png' },
    { name: 'GCP', src: './assets/technologies/gcp.png' },
    { name: 'GIT', src: './assets/technologies/git.png' },
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item,
        index: i * this.experienceItems.length + index,
      }))
    ).flat();
  }
}
