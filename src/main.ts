import 'polyfills';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgDashboardMod} from "./app/ngDashboardAppMod";

enableProdMode();
platformBrowserDynamic().bootstrapModule(NgDashboardMod);
