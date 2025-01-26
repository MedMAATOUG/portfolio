import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
})
export class ServiceComponent {
  public services = [
    {
      title: 'Full Stack Development',
      description:
        'Expert in building modern web applications using Angular for the frontend and Python (Django) for the backend.',
      skills: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'SCSS',
        'Python',
        'Django',
      ],
      icon: './assets/icons/code-alt-regular-24.png',
    },
    {
      title: 'Dashboard & Data Visualization',
      description:
        'Developed advanced dashboards for device management, CRUD operations, and real-time maps for tracking.',
      skills: ['Angular', 'DevExtreme', 'Leaflet', 'REST APIs'],
      icon: './assets/icons/dashboard-solid-24.png',
    },
    {
      title: 'Library Development',
      description:
        'Created reusable libraries, such as a query designer for dynamic data manipulation and visualization.',
      skills: ['Opath Expression', 'JavaScript', 'TypeScript'],
      icon: './assets/icons/library-regular-24.png',
    },
    {
      title: 'IoT Solutions',
      description:
        'Implemented IoT-based applications, including real-time monitoring and control of agriculture pumps.',
      skills: ['IoT', 'Angular', 'Leaflet', 'REST APIs'],
      icon: './assets/icons/wifi-1-regular-24.png',
    },
    {
      title: 'API Development',
      description:
        'Built efficient and scalable APIs for cloud services using Python and AWS.',
      skills: ['Python', 'AWS', 'FastAPI', 'Django'],
      icon: './assets/icons/server-regular-24.png',
    },
    {
      title: 'UI/UX Design',
      description:
        'Designed intuitive interfaces for applications using modern design principles and frameworks.',
      skills: ['Figma', 'Tailwind CSS', 'Material Design', 'SCSS'],
      icon: './assets/icons/figma-logo-24.png',
    },
  ];
}
