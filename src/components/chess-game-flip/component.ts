import { Component, Input } from '@angular/core'
import { filterRedNames, filterBlackNames } from '../chess-man/util'
import './style.less'

@Component({
	selector: 'chess-game-flip-component',
	template: `
		<div class="chess-game flip">
			<chess-status [winnerColor]="props.winnerColor"
				[playerColor]="props.playerColor">
			</chess-status>
			<div class="chess-frames">
				<div class="left">
					<chess-man-list [names]="redNames"></chess-man-list>
				</div>
				<div class="chess-body">
					<chess-board-flip></chess-board-flip>
					<chess-grid-flip [props]="props"></chess-grid-flip>
				</div>
				<div class="right">
					<chess-man-list [names]="blackNames"></chess-man-list>
				</div>
			</div>
		</div>`
})
export class ChessGameFlipComponent {
	redNames: string[] = []
	blackNames: string[] = []
	_props: any = {}

	@Input()
	get props(): any {
		return this._props
	}

	set props(value: any) {
		this._props = value
		this.redNames = filterRedNames(this.props.killedNames)
		this.blackNames = filterBlackNames(this.props.killedNames)
	}
}
