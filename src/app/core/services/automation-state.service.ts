import { Service, signal } from '@angular/core';
import { DEFAULT_AUTOMATION_SETTINGS } from '../constants/default-settings';
@Service()
export class AutomationStateService { readonly settings = signal(DEFAULT_AUTOMATION_SETTINGS); toggleEnabled(): void { this.settings.update((settings) => ({ ...settings, enabled: !settings.enabled })); } }
