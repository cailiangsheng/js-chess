import { Component } from '@angular/core'
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
	name = '象'
	isActive = false
	isHidden = false

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
