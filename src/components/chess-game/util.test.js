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
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 0, cellIndex: 2}, name: '馬'},
      )).to.be.false
    })

    it('cannot go to same position', () => {
      expect(canGo(
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 0, cellIndex: 1}},
      )).to.be.false
    })

    it('cannot go outside boundary', () => {
      expect(canGo(
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 0, cellIndex: 100}},
      )).to.be.false
      expect(canGo(
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 100, cellIndex: 1}},
      )).to.be.false
    })

    it('JU can go straight forward', () => {
      expect(canGo(
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 0, cellIndex: 5}}
      )).to.be.true
      expect(canGo(
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 5, cellIndex: 1}}
      )).to.be.true
    })
  })
})
