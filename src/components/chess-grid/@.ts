import { Component, Input } from '@angular/core'
import * as util from './util'
import _ from 'lodash'
import './style.less'

@Component({
	selector: 'chess-grid',
	template: `
        <table class="chess-grid">
        <tbody>
        <tr class="row" *ngFor="let r of rows(); index as i">
            <td class="cell" *ngFor="let c of cells(); index as j">
                <chess-tattoo *ngIf="showTattoo && needsTattoo(i, j)"></chess-tattoo>
                <chess-stepped *ngIf="isStepped(i, j)"></chess-stepped>
                <chess-man *ngIf="hasChessMan(i, j)"
                    [name]="getChessManName(i, j)"
                    [isActive]="isActiveChessman(i, j)"
                    [isHidden]="isHiddenChessman(i, j)">
                </chess-man>
                <chess-stepping *ngIf="isStepping(i, j)"></chess-stepping>
            </td>
        </tr>
        </tbody>
        </table>`
})
export class ChessGrid {
    @Input()
    numRows: number = 10

    @Input()
    numCells: number = 9

	@Input()
	showTattoo: boolean = true

	@Input()
	chessmans: Array<Object> = []

	@Input()
    activeChessman: any = null

	@Input()
	steppedPositions: Array<Object> = []

	@Input()
	steppingPositions: Array<Object> = []
    
	rows() {
        return Array.from({length: this.numRows})
    }

    cells() {
        return Array.from({length: this.numCells})
    }

    needsTattoo(rowIndex, cellIndex) {
        const position = { rowIndex, cellIndex }
        return util.needsTattoo(position)
    }

    isStepped(rowIndex, cellIndex) {
        const position = { rowIndex, cellIndex }
        return util.findPosition(this.steppedPositions, position)
    }

    isStepping(rowIndex, cellIndex) {
        const position = { rowIndex, cellIndex }
        return util.findPosition(this.steppingPositions, position)
    }

    hasChessMan(rowIndex, cellIndex) {
        return !!this.getChessMan(rowIndex, cellIndex)
    }

    isActiveChessman(rowIndex, cellIndex) {
        const position = { rowIndex, cellIndex }
        return this.activeChessman && _.isEqual(position, this.activeChessman.position)
    }

    isHiddenChessman (rowIndex, cellIndex) {
        const chessman = this.getChessMan(rowIndex, cellIndex)
        return chessman && chessman.isHidden
    }

    getChessManName(rowIndex, cellIndex) {
        const chessman = this.getChessMan(rowIndex, cellIndex)
        return chessman && chessman.name
    }

    getChessMan(rowIndex, cellIndex) {
        const position = { rowIndex, cellIndex }
        return util.findChessMan(this.chessmans, position)
    }
}
