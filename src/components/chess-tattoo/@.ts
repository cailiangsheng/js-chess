import { Component } from '@angular/core'
import './style.less'

@Component({
  selector: 'chess-tattoo',
  template: `
	  <div class="chess-tattoo">
	    <div class="corner top left"></div>
	    <div class="corner top right"></div>
	    <div class="corner bottom left"></div>
	    <div class="corner bottom right"></div>
	  </div>`
})
export class ChessTattoo { }
