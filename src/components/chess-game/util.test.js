import {canGo} from './util'

describe('chess-game.util', () => {
  describe('canGo', () => {
    describe('All', () => {
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
    })

    describe('JU', () => {
      it('can go straight forward', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
          {position: {rowIndex: 0, cellIndex: 5}}
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
          {position: {rowIndex: 5, cellIndex: 1}}
        )).to.be.true
      })

      it('cannot go in slant direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
          {position: {rowIndex: 2, cellIndex: 2}}
        )).to.be.false
      })
    })

    describe('PAO', () => {
      it('can go straight forward', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
          {position: {rowIndex: 0, cellIndex: 5}}
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
          {position: {rowIndex: 5, cellIndex: 1}}
        )).to.be.true
      })

      it('cannot go in slant direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
          {position: {rowIndex: 2, cellIndex: 2}}
        )).to.be.false
      })
    })

    describe('MA', () => {
      it('can go in RI direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 2, cellIndex: 0}}
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 2, cellIndex: 2}}
        )).to.be.true
      })

      it('cannot go in TIAN direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 2, cellIndex: 3}}
        )).to.be.false
      })

      it('cannot go straight forward', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 0, cellIndex: 5}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 5, cellIndex: 1}}
        )).to.be.false
      })
    })

    describe('XIANG', () => {
      it('can go in TIAN direction', () => {
        expect(canGo(
          {position: {rowIndex: 2, cellIndex: 4}, name: '相'},
          {position: {rowIndex: 4, cellIndex: 6}}
        )).to.be.true
      })

      it('cannot go in RI direction', () => {
        expect(canGo(
          {position: {rowIndex: 2, cellIndex: 4}, name: '相'},
          {position: {rowIndex: 3, cellIndex: 6}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 2, cellIndex: 4}, name: '相'},
          {position: {rowIndex: 4, cellIndex: 5}}
        )).to.be.false
      })

      it('cannot go straight forward', () => {
        expect(canGo(
          {position: {rowIndex: 2, cellIndex: 4}, name: '相'},
          {position: {rowIndex: 2, cellIndex: 6}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 2, cellIndex: 4}, name: '相'},
          {position: {rowIndex: 6, cellIndex: 4}}
        )).to.be.false
      })
    })

    describe('SHI', () => {
      it('can go in slant direction by one step', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '士'},
          {position: {rowIndex: 2, cellIndex: 5}}
        )).to.be.true
      })

      it('cannot go in RI direction', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '士'},
          {position: {rowIndex: 2, cellIndex: 6}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '士'},
          {position: {rowIndex: 2, cellIndex: 6}}
        )).to.be.false
      })

      it('cannot go in TIAN direction', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '士'},
          {position: {rowIndex: 3, cellIndex: 6}}
        )).to.be.false
      })

      it('cannot go straight forward', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '士'},
          {position: {rowIndex: 1, cellIndex: 5}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '士'},
          {position: {rowIndex: 1, cellIndex: 5}}
        )).to.be.false
      })
    })

    describe('JIANG', () => {
      it('can go straight forward by one step', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 1, cellIndex: 5}}
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '將'},
          {position: {rowIndex: 1, cellIndex: 5}}
        )).to.be.true
      })

      it('cannot go in slant direction', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 2, cellIndex: 5}}
        )).to.be.false
      })

      it('cannot go in RI direction', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 2, cellIndex: 6}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '將'},
          {position: {rowIndex: 2, cellIndex: 6}}
        )).to.be.false
      })

      it('cannot go in TIAN direction', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 3, cellIndex: 6}}
        )).to.be.false
      })
    })

    describe('ZU', () => {
      it('can go straight forward by one step', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '卒'},
          {position: {rowIndex: 0, cellIndex: 2}}
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '卒'},
          {position: {rowIndex: 1, cellIndex: 1}}
        )).to.be.true
      })

      it('cannot go in slant direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '卒'},
          {position: {rowIndex: 1, cellIndex: 2}}
        )).to.be.false
      })

      it('cannot go in RI direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '卒'},
          {position: {rowIndex: 2, cellIndex: 0}}
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '卒'},
          {position: {rowIndex: 2, cellIndex: 2}}
        )).to.be.false
      })

      it('cannot go in TIAN direction', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '卒'},
          {position: {rowIndex: 2, cellIndex: 3}}
        )).to.be.false
      })
    })
  })
})
