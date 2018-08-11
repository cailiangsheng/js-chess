import { Component } from '@angular/core'

@Component({
  selector: '#root',
  template: `
	  <chess-stepped></chess-stepped>
	  <chess-stepping></chess-stepping>
	  <chess-tattoo></chess-tattoo>
	  <chess-status winnerColor="" playerColor="red"></chess-status>`
})
export class ChessGame { }
