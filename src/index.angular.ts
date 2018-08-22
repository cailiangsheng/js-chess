import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import { AppModule } from 'views/chess-app/@'

import 'zone.js'
import 'core-js/es6/reflect' // polyfill for DI
import 'core-js/es7/reflect' // polyfill for DI

import './style.less'

platformBrowserDynamic().bootstrapModule(AppModule)