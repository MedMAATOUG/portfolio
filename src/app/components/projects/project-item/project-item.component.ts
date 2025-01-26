import { Component, Input } from '@angular/core';
import type { Project } from '../../../models/models';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: '../projects.component.scss',
})
export class ProjectItemComponent {
  @Input({ required: true }) project!: Project;
}
