import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import { AppModule } from './components/chess-app/module'

import 'zone.js'

import './style.less'

platformBrowserDynamic().bootstrapModule(AppModule)