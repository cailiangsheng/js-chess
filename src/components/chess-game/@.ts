import { Component, Input } from '@angular/core'
// import CHESSMANS from './chessmans.json'
import './style.less'

@Component({
  selector: '#root',
  template: `
  	<div class="chess-game normal">
		<chess-status winnerColor="winnerColor"
			playerColor="playerColor"></chess-status>
		<div class="chess-body">
			<chess-board></chess-board>
			<chess-grid [chessmans]="chessmans"
				[activeChessman]="activeChessman"
				[steppingPositions]="steppingPositions"
				[steppedPositions]="steppedPositions">
			</chess-grid>
		</div>
	</div>`
})
export class ChessGame {
	winnerColor:string = ''
	playerColor:string = ''
	chessmans: Array<Object> = [] // CHESSMANS
    activeChessman: Object = null
	steppedPositions: Array<Object> = []
	steppingPositions: Array<Object> = []
}
