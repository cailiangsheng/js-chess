import { Component } from '@angular/core'
import './style.less'

@Component({
	selector: 'chess-board-flip',
	template: `
	  <div class="chess-board flip">
	    <table>
	      <tbody>
	        <tr class="row" *ngFor="let r of rows">
	        	<td class="cell" *ngFor="let c of cells"></td>
	        </tr>
	      </tbody>
	  	</table>
	  </div>`
})
export class ChessBoardFlip {
	rows = Array.from({ length: 8 })
	cells = Array.from({ length: 4 })
}
