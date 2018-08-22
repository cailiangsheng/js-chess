import { Component, Input } from '@angular/core'
import { getName } from 'components/chess-man/util'
import CHESS_MAN from 'components/chess-man/consts'
import './style.less'

@Component({
	selector: 'chess-status',
	template: `
		<div [ngClass]="classNames()">
			<div [ngClass]="['winner', winnerColor]" *ngIf="winnerColor"></div>
			<div class="player" *ngIf="playerName()">
	      <chess-man [name]="playerName()"></chess-man>
			</div>
		</div>`
})
export class ChessStatus {
	@Input()
	winnerColor: string = ''

	@Input()
	playerColor: string = ''

	classNames() {
		return {
			'chess-status': true,
			'initial': !this.winnerColor && !this.playerColor
		}
	}

	playerName() {
		return !this.winnerColor && this.playerColor
			&& getName({ type: CHESS_MAN.TYPE.JIANG, color: this.playerColor })
	}
}
