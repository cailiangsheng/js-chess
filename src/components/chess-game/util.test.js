import {canGo} from './util'

describe('chess-game.util', () => {
  describe('canGo', () => {
    it('cannot go with empty target', () => {
      expect(canGo(null, null)).to.be.false
      expect(canGo({}, null)).to.be.false
      expect(canGo(null, {})).to.be.false
      expect(canGo({}, {})).to.be.false
    })

    it('cannot go with same color', () => {
      expect(canGo(
        {name: '車', rowIndex: 0, cellIndex: 1},
        {name: '馬', rowIndex: 0, cellIndex: 2},
      )).to.be.false
    })

    it('cannot go to same position', () => {
      expect(canGo(
        {name: '車', rowIndex: 0, cellIndex: 1},
        {name: '車', rowIndex: 0, cellIndex: 1},
      )).to.be.false
    })
  })
})
