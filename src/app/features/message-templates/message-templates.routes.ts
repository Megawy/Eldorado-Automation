import { Routes } from '@angular/router';
export default [{ path: '', loadComponent: () => import('./message-templates.component').then((component) => component.MessageTemplatesComponent) }] satisfies Routes;
