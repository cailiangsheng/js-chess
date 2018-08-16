import { Component, Input } from '@angular/core'
import CONSTS from "./consts"
import '../chess-grid/style.less'

@Component({
	selector: 'chess-grid-flip',
	template: `
        <chess-grid showTattoo="false"
            [numRows]="numRows"
            [numCells]="numCells"
            [chessmans]="props.chessmans"
            [activeChessman]="props.activeChessman"
            [steppedPositions]="props.steppedPositions"
            [steppingPositions]="props.steppingPositions"
            (click)="props.onClick($event)">
        </chess-grid>`
})
export class ChessGridFlip {
    numRows = CONSTS.NUM_ROWS
    numCells = CONSTS.NUM_CELLS
    @Input() props: any = {}
}
