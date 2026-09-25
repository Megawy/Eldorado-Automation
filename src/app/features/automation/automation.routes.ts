import { Routes } from '@angular/router';
export default [{ path: '', loadComponent: () => import('./automation.component').then((component) => component.AutomationComponent) }] satisfies Routes;
