import { Routes } from '@angular/router';
export default [{ path: '', loadComponent: () => import('./activity.component').then((component) => component.ActivityComponent) }] satisfies Routes;
