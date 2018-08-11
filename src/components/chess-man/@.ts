import { Component, Input } from '@angular/core'
import { getColor } from './util'
import './style.less'

@Component({
	selector: 'chess-man',
	template: `
		<div [ngClass]="classNames()">
			<span>{{name}}</span>
		</div>`
})
export class ChessMan {
	@Input()
	name: string = '象'

	@Input()
	isActive: boolean = false

	@Input()
	isHidden: boolean = false

	classNames() {
		const color = getColor(this.name)
		return {
			[color]: true,
			'chess-man': true,
			'hidden': this.isHidden,
			'active': this.isActive
		}
	}
}
