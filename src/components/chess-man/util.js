import redNames from './names-red'
import blackNames from './names-black'

const validNames = redNames.concat(blackNames)
const isValid = (name) => validNames.includes(name)
const isRed = (name) => redNames.includes(name)
const isBlack = (name) => blackNames.includes(name)

const isSameColor = (name1, name2) => {
	return isRed(name1) && isRed(name2)
		|| isBlack(name1) && isBlack(name2)
}

export {
  validNames,
  isValid,
  isRed,
  isBlack,
  isSameColor
}
