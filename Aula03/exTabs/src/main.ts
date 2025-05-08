import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { addIcons } from 'ionicons';

import {
  homeOutline,
  personOutline,
  settingsOutline,
  calendarOutline,
  newspaperOutline
} from 'ionicons/icons'

addIcons ({
  'home-outline': homeOutline,
  'person-outline': personOutline,
  'settings-outline': settingsOutline,
  'calendar-outline': calendarOutline,
  'newspaper-outline': newspaperOutline
})

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
