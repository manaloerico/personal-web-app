import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(
    //   routes,
    //   withHashLocation(),
    //   withInMemoryScrolling({
    //     scrollPositionRestoration: 'top',
    //     anchorScrolling: 'enabled',
    //   })
    // ),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(BrowserAnimationsModule),
    provideAnimations(),
  ],
};
