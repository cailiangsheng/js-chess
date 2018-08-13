import { Component, Input } from '@angular/core'
import './style.less'

@Component({
	selector: 'chess-game',
	template: `
  	<div class="chess-game normal">
		<chess-status [winnerColor]="winnerColor"
			[playerColor]="playerColor"></chess-status>
		<div class="chess-body">
			<chess-board></chess-board>
			<chess-grid [chessmans]="chessmans"
				[activeChessman]="activeChessman"
				[steppingPositions]="steppingPositions"
				[steppedPositions]="steppedPositions"
				(click)="log($event)">
			</chess-grid>
		</div>
	</div>`
})
export class ChessGame {
	winnerColor: string = ''
	playerColor: string = ''
	chessmans: Array<Object> = require('./chessmans.json')
	activeChessman: Object = null
	steppedPositions: Array<Object> = []
	steppingPositions: Array<Object> = []

	log($event) {
		console.log($event)
	}
}
