import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

import { ProjectItemComponent } from './project-item/project-item.component';

import type { Project } from '../../models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent, NgForOf, NgClass],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  protected projects: Project[] = [
    {
      name: 'My Portfolio',
      // description:
      // "Feel free to check out the code for my portfolio on Github. It's open for exploration, and you're welcome to fork it and create your own version!",
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'Bootstrap',
        'GitHub Pages',
        'Github Actions',
      ],
      src: './assets/projects/portfolio.png',
      link: 'https://mohamed-maatoug.netlify.app/',
    },
    {
      name: 'Tasks Management',
      // description: 'template for a task Management application',
      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'Java',
        'Devextrem',
      ],
      src: './assets/projects/task-managment.png',
      link: 'projects-managment.netlify.app',
    },
    {
      name: 'Watermon',
      // description: ' ',
      technologies: ['HTml', 'CSS', 'JavaScript'],
      src: './assets/projects/waterMon.png',
      link: 'watermon.netlify.app',
    },
    {
      name: 'Clean service',
      // description:
      // 'Is a semple application for a clean service provider that can be used by customers to contact the companies ',
      technologies: ['HTml', 'CSS', 'JavaScript'],
      src: './assets/projects/cleanService.png',
      link: 'supercleanservice.netlify.app',
    },
  ];
}
