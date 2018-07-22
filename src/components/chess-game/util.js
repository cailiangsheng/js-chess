import {
  isValid,
  isSameColor
} from 'components/chess-man/util'

const canGo = (from, to) => {
  if (!isValid(from.name)) return false
  if (isSameColor(from.name, to.name)) return false
  return true
}

export {
  canGo
}
