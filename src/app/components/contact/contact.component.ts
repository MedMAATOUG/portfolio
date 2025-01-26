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

  public contact = {
    number: '+216 29 272 307',
    email: 'maatoug.mouhammed@gmail.com',
    contry: 'Tunis Tunisia',
  };

  public get email(): string {
    return 'maatoug.mouhammed@gmail.com';
  }
}
