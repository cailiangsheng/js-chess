import {
  canPlay,
  canGo
} from './chess-game'

describe('utils.chess-game', () => {
  describe('canPlay', () => {
    it('cannot play with empty chessmans', () => {
      expect(canPlay(null)).to.be.false
      expect(canPlay([])).to.be.false
    })

    it('can play with two JIANG chessmans', () => {
      expect(canPlay([
        {position: {rowIndex: 0, cellIndex: 4}, name: '將'},
        {position: {rowIndex: 9, cellIndex: 4}, name: '帥'}
      ])).to.be.true
    })

    it('cannot play with one JIANG chessman', () => {
      expect(canPlay([
        {position: {rowIndex: 0, cellIndex: 4}, name: '將'}
      ])).to.be.false
      expect(canPlay([
        {position: {rowIndex: 9, cellIndex: 4}, name: '帥'}
      ])).to.be.false
    })

    it('cannot play with no JIANG chessman', () => {
      expect(canPlay([
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'}
      ])).to.be.false
      expect(canPlay([
        {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
        {position: {rowIndex: 0, cellIndex: 2}, name: '馬'},
        {position: {rowIndex: 0, cellIndex: 3}, name: '砲'}
      ])).to.be.false
    })
  })

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

      it('cannot go straight forward if there\'s blocker ahead', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
            {position: {rowIndex: 0, cellIndex: 5}},
            [
              {position: {rowIndex: 0, cellIndex: 3}, name: '馬'}
            ]
          )).to.be.false
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
            {position: {rowIndex: 6, cellIndex: 1}},
            [
              {position: {rowIndex: 2, cellIndex: 1}, name: '馬'},
              {position: {rowIndex: 4, cellIndex: 1}, name: '砲'}
            ]
          )).to.be.false
      })

      it('can go straight forward if there\'s no blocker ahead', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
            {position: {rowIndex: 0, cellIndex: 5}},
            [
              {position: {rowIndex: 3, cellIndex: 2}, name: '馬'}
            ]
          )).to.be.true
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
            {position: {rowIndex: 6, cellIndex: 1}},
            [
              {position: {rowIndex: 2, cellIndex: 2}, name: '馬'},
              {position: {rowIndex: 4, cellIndex: 3}, name: '砲'}
            ]
          )).to.be.true
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

      it('can jump straight forward if there\'s 1 blocker ahead to non-empty target', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
            {position: {rowIndex: 0, cellIndex: 5}, name: '兵'},
            [
              {position: {rowIndex: 0, cellIndex: 3}, name: '馬'}
            ]
          )).to.be.true
      })

      it('cannot jump straight forward if there\'s 1 blocker ahead to empty target', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
            {position: {rowIndex: 0, cellIndex: 5}},
            [
              {position: {rowIndex: 0, cellIndex: 3}, name: '馬'}
            ]
          )).to.be.false
      })

      it('cannot jump straight forward if there\'s more than 1 blocker ahead to non-empty target', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '車'},
            {position: {rowIndex: 6, cellIndex: 1}, name: '兵'},
            [
              {position: {rowIndex: 2, cellIndex: 1}, name: '馬'},
              {position: {rowIndex: 4, cellIndex: 1}, name: '砲'}
            ]
          )).to.be.false
      })

      it('can go straight forward if there\'s no blocker ahead to empty target', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
            {position: {rowIndex: 0, cellIndex: 5}},
            [
              {position: {rowIndex: 3, cellIndex: 2}, name: '馬'}
            ]
          )).to.be.true
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
            {position: {rowIndex: 6, cellIndex: 1}},
            [
              {position: {rowIndex: 2, cellIndex: 2}, name: '馬'},
              {position: {rowIndex: 4, cellIndex: 3}, name: '卒'}
            ]
          )).to.be.true
      })

      it('cannot go straight forward if there\'s no blocker ahead to non-empty target', () => {
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
            {position: {rowIndex: 0, cellIndex: 5}, name: '兵'},
            [
              {position: {rowIndex: 3, cellIndex: 2}, name: '馬'}
            ]
          )).to.be.false
          expect(canGo(
            {position: {rowIndex: 0, cellIndex: 1}, name: '砲'},
            {position: {rowIndex: 6, cellIndex: 1}, name: '兵'},
            [
              {position: {rowIndex: 2, cellIndex: 2}, name: '馬'},
              {position: {rowIndex: 4, cellIndex: 3}, name: '卒'}
            ]
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

      it('cannot go in RI direction if there\' blocker nearby', () => {
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 2, cellIndex: 0}},
          [
            {position: {rowIndex: 1, cellIndex: 1}, name: '卒'}
          ]
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 1}, name: '馬'},
          {position: {rowIndex: 2, cellIndex: 2}},
          [
            {position: {rowIndex: 1, cellIndex: 1}, name: '卒'}
          ]
        )).to.be.false
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

      it('cannot go in TIAN direction if there\'s blocker nearby', () => {
        expect(canGo(
          {position: {rowIndex: 2, cellIndex: 4}, name: '相'},
          {position: {rowIndex: 4, cellIndex: 6}},
          [
            {position: {rowIndex: 3, cellIndex: 5}, name: '卒'}
          ]
        )).to.be.false
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

      it('can go straight forward by more than 1 steps if target is JIANG and there\'s no blocker ahead', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 9, cellIndex: 4}, name: '帥'},
          [
            {position: {rowIndex: 4, cellIndex: 3}, name: '砲'}
          ]
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '將'},
          {position: {rowIndex: 8, cellIndex: 5}, name: '帥'},
          [
            {position: {rowIndex: 5, cellIndex: 4}, name: '砲'}
          ]
        )).to.be.true
      })

      it('cannot go straight forward by more than 1 steps if target is JIANG and there\'s blocker ahead', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 9, cellIndex: 4}, name: '帥'},
          [
            {position: {rowIndex: 4, cellIndex: 4}, name: '砲'}
          ]
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '將'},
          {position: {rowIndex: 8, cellIndex: 5}, name: '帥'},
          [
            {position: {rowIndex: 5, cellIndex: 5}, name: '砲'}
          ]
        )).to.be.false
      })

      it('cannot go straight forward by more than 1 steps if target is not JIANG and there\'s no blocker ahead', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 9, cellIndex: 4}, name: '傌'},
          [
            {position: {rowIndex: 4, cellIndex: 3}, name: '砲'}
          ]
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '將'},
          {position: {rowIndex: 8, cellIndex: 5}, name: '傌'},
          [
            {position: {rowIndex: 5, cellIndex: 4}, name: '砲'}
          ]
        )).to.be.false
      })

      it('cannot go straight forward by more than 1 steps if target is not JIANG and there\'s blocker ahead', () => {
        expect(canGo(
          {position: {rowIndex: 1, cellIndex: 4}, name: '將'},
          {position: {rowIndex: 9, cellIndex: 4}, name: '傌'},
          [
            {position: {rowIndex: 4, cellIndex: 4}, name: '砲'}
          ]
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 0, cellIndex: 5}, name: '將'},
          {position: {rowIndex: 8, cellIndex: 5}, name: '傌'},
          [
            {position: {rowIndex: 5, cellIndex: 5}, name: '砲'}
          ]
        )).to.be.false
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
      it('can go straight forward vertically by one step', () => {
        expect(canGo(
          {position: {rowIndex: 6, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 5, cellIndex: 6}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 3, cellIndex: 6}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.true
      })

      it('cannot go straight backward vertically by one step', () => {
        expect(canGo(
          {position: {rowIndex: 6, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 7, cellIndex: 6}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 5, cellIndex: 6}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
      })

      it('cannot go straight horizontally by one step before the river', () => {
        expect(canGo(
          {position: {rowIndex: 6, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 6, cellIndex: 7}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
          expect(canGo(
            {position: {rowIndex: 6, cellIndex: 6}, name: '卒'},
            {position: {rowIndex: 6, cellIndex: 5}},
            [
              {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
            ]
          )).to.be.false
      })

      it('can go straight horizontally by one step after the river', () => {
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 4, cellIndex: 5}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.true
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 4, cellIndex: 7}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.true
      })

      it('cannot go in slant direction', () => {
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 3, cellIndex: 5}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
      })

      it('cannot go in RI direction', () => {
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 2, cellIndex: 5}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 3, cellIndex: 4}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
      })

      it('cannot go in TIAN direction', () => {
        expect(canGo(
          {position: {rowIndex: 4, cellIndex: 6}, name: '卒'},
          {position: {rowIndex: 2, cellIndex: 4}},
          [
            {position: {rowIndex: 9, cellIndex: 4}, name: '將'}
          ]
        )).to.be.false
      })
    })
  })
})
