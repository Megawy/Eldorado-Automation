import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/dashboard/dashboard.routes') },
  { path: 'automation', loadChildren: () => import('./features/automation/automation.routes') },
  { path: 'message-templates', loadChildren: () => import('./features/message-templates/message-templates.routes') },
  { path: 'pricing', loadChildren: () => import('./features/pricing/pricing.routes') },
  { path: 'activity', loadChildren: () => import('./features/activity/activity.routes') },
  { path: 'settings', loadChildren: () => import('./features/settings/settings.routes') },
  { path: '**', redirectTo: '' },
];
