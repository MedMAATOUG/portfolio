export interface Project {
  name: string;
  description: string;
  technologies: string[];

  src: string;
  link: string;
}

export interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}
