import {canGo} from './util'

describe('chess-game.util', () => {
  describe('canGo', () => {
    it('cannot go with invalid info', () => {
      expect(canGo(null, null)).to.be.false
      expect(canGo({}, null)).to.be.false
      expect(canGo(null, {})).to.be.false
      expect(canGo({}, {})).to.be.false
    })
  })
})
