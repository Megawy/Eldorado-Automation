import { Component, computed, signal } from '@angular/core';

interface Metric { label: string; value: string; change: string; positive: boolean; }
interface RecentActivity { title: string; detail: string; time: string; }
@Component({
  template: `
    <section class="dashboard" aria-labelledby="page-title">
      <header><div><p class="eyebrow">OVERVIEW</p><h1 id="page-title">Good morning, seller.</h1><p class="subtitle">Here is how your Eldorado automation is performing today.</p></div><button type="button" (click)="automationEnabled.update(value => !value)" [class.enabled]="automationEnabled()" [attr.aria-pressed]="automationEnabled()">Automation {{ automationEnabled() ? 'on' : 'off' }}</button></header>
      <div class="metrics">@for (metric of metrics(); track metric.label) {<article><p>{{ metric.label }}</p><strong>{{ metric.value }}</strong><span [class.positive]="metric.positive">{{ metric.change }}</span></article>}</div>
      <div class="panels"><section class="panel"><h2>Today’s activity</h2><div class="chart" role="img" aria-label="Automation activity chart with a steady upward trend"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><p class="caption">Automation processed requests consistently throughout the day.</p></section><section class="panel"><h2>Recent activity</h2><ul>@for (activity of recentActivity; track activity.title) {<li><span class="activity-icon" aria-hidden="true">✓</span><div><strong>{{ activity.title }}</strong><p>{{ activity.detail }}</p></div><time>{{ activity.time }}</time></li>}</ul><a href="/activity">View all activity <span aria-hidden="true">→</span></a></section></div>
    </section>
  `,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  protected readonly automationEnabled = signal(true);
  protected readonly metrics = computed<readonly Metric[]>(() => [
    { label: 'Requests handled', value: '48', change: '+12.5% vs. yesterday', positive: true },
    { label: 'Offers sent', value: '31', change: '+8.2% vs. yesterday', positive: true },
    { label: 'Response rate', value: '68%', change: '+4.1% vs. yesterday', positive: true },
    { label: 'Avg. response time', value: '1m 42s', change: '18s faster than yesterday', positive: true },
  ]);
  protected readonly recentActivity: readonly RecentActivity[] = [
    { title: 'Offer sent automatically', detail: 'Minecraft • 1,000 coins', time: '2 min ago' },
    { title: 'Customer message replied', detail: 'Order #EA-10482', time: '14 min ago' },
    { title: 'Price rule applied', detail: 'WoW Classic • Gold', time: '26 min ago' },
  ];
}
