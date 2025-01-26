import { Component } from '@angular/core';
import { NavLinksComponent } from '../shared/nav-links/nav-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NavLinksComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
  }
}
