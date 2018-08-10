import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic'

import { Module } from './components/chess-game/module'
// import { Module } from './components/chess-game-flip/module'

import 'zone.js'

import './style.less'

platformBrowserDynamic().bootstrapModule(Module)