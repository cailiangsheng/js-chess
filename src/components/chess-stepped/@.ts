import { Component } from '@angular/core'
import './style.less'

@Component({
  selector: 'chess-stepped',
  template: `
	  <div class="chess-stepped">
	    <div class="corner top left"></div>
	    <div class="corner top right"></div>
	    <div class="corner bottom left"></div>
	    <div class="corner bottom right"></div>
	  </div>`
})
export class ChessStepped { }
