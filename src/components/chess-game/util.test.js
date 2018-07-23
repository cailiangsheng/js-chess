import {canGo} from './util'

describe('util', () => {
  it('canGo', () => {
    expect(canGo(null, null)).to.be.false
  })
})
