import { Component, Input } from '@angular/core'
import * as util  from './util'
import './style.less'

@Component({
	selector: 'chess-man-list',
	template: `
        <div class="chess-man-list">
            <div class="chess-man-list-item" *ngFor="let name of uniqNames()">
                <chess-man [name]="name"></chess-man>
                <div class="chess-man-count" *ngIf="countNames(name) > 1">
                    {{countNames(name)}}
                </div>
            </div>
        </div>`
})
export class ChessManList {
    @Input() names: string[] = []

    countNames(name: string): number {
        return util.countNames(this.names)[name]
    }

    uniqNames(): string[] {
        return util.uniqNames(this.names)
    }
}
