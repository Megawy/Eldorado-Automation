import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  template: `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <div class="application-shell">
      <app-sidebar />
      <main id="main-content" tabindex="-1"><router-outlet /></main>
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
