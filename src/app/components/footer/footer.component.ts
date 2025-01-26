import { Component } from '@angular/core';

import { NavLinksComponent } from '../shared/nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavLinksComponent],
  templateUrl: './footer.component.html',
  styles: `
  .footer-container {
  padding: 2rem;
  text-align: center;
  background-color: #000;
  color: #fff;
  font-size: 0.875rem;
}

  `,
})
export class FooterComponent {
  public getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
}
