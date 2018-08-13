import { Component, Input } from '@angular/core'
import './style.less'

@Component({
	selector: 'chess-game-component',
	template: `
  	<div class="chess-game normal">
		<chess-status [winnerColor]="props.winnerColor"
			[playerColor]="props.playerColor"></chess-status>
		<div class="chess-body">
			<chess-board></chess-board>
			<chess-grid [chessmans]="props.chessmans"
				[activeChessman]="props.activeChessman"
				[steppingPositions]="props.steppingPositions"
				[steppedPositions]="props.steppedPositions"
				(click)="props.onClick">
			</chess-grid>
		</div>
	</div>`
})
export class ChessGameComponent {
	@Input() props: Object = {}
}
