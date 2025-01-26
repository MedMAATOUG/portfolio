import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public goToLinkedin(): void {
    window.open('https://www.linkedin.com/in/mohamed-maatoug/', '_blank');
  }

  public get email(): string {
    return 'maatoug.mouhammed@gmail.com';
  }
}
