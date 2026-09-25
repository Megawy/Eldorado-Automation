import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem { label: string; path: string; icon: string; }

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  host: { '[class.is-open]': 'isOpen()', '[attr.aria-label]': "'Primary navigation'" },
  template: `
    <header class="brand"><span class="brand-mark" aria-hidden="true">E</span><span>Eldorado</span></header>
    <button class="menu-toggle" type="button" (click)="isOpen.update(value => !value)" [attr.aria-expanded]="isOpen()" aria-controls="navigation-list">Menu</button>
    <nav id="navigation-list" aria-label="Main menu">
      @for (item of navigation; track item.path) {
        <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.path === '/' }" (click)="isOpen.set(false)">
          <span aria-hidden="true">{{ item.icon }}</span><span>{{ item.label }}</span>
        </a>
      }
    </nav>
    <footer><span class="status-dot" aria-hidden="true"></span><span>Extension connected</span></footer>
  `,
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  protected readonly isOpen = signal(false);
  protected readonly navigation: readonly NavigationItem[] = [
    { label: 'Dashboard', path: '/', icon: '⌂' },
    { label: 'Automation', path: '/automation', icon: '↻' },
    { label: 'Message templates', path: '/message-templates', icon: '✉' },
    { label: 'Pricing', path: '/pricing', icon: '◇' },
    { label: 'Activity', path: '/activity', icon: '◷' },
    { label: 'Settings', path: '/settings', icon: '⚙' },
  ];
}
