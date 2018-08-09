import { Component } from '@angular/core'
import './style.less'

@Component({
  selector: 'chess-board',
  template: `
	  <div class="chess-board normal">
	    <table>
	      <tbody>
	        <tr class="row" *ngFor="let r of rows">
	        	<td class="cell" *ngFor="let c of cells"></td>
	        </tr>
	      </tbody>
	  	</table>
	  </div>`
})
export class ChessBoard {
	rows = Array.from({length: 9})
	cells = Array.from({length: 8})
}
