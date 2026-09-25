import { Routes } from '@angular/router';
export default [{ path: '', loadComponent: () => import('./settings.component').then((component) => component.SettingsComponent) }] satisfies Routes;
