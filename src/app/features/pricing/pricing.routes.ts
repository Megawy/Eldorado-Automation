import { Routes } from '@angular/router';
export default [{ path: '', loadComponent: () => import('./pricing.component').then((component) => component.PricingComponent) }] satisfies Routes;
