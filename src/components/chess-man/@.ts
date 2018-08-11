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
	private _name: string = '象'
	private _isActive: boolean = false
	private _isHidden: boolean = false

	@Input()
	set name(value: string) {
		this._name = value
	}
	get name(): string {
		return this._name
	}

	@Input()
	set isActive(value: boolean) {
		this._isActive = value
	}
	get isActive(): boolean {
		return this._isActive
	}

	@Input()
	set isHidden(value: boolean) {
		this._isHidden = value
	}
	get isHidden(): boolean {
		return this._isHidden
	}

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
