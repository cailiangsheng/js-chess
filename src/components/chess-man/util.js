import CONSTS from './consts'

const redNames = CONSTS.RED_NAMES
const blackNames = CONSTS.BLACK_NAMES
const validNames = redNames.concat(blackNames)

const isValid = (name) => validNames.includes(name)
const isRed = (name) => redNames.includes(name)
const isBlack = (name) => blackNames.includes(name)

const isSameColor = (name1, name2) => {
	return isRed(name1) && isRed(name2)
		|| isBlack(name1) && isBlack(name2)
}

const getColor = (name) => {
	if (isRed(name)) return CONSTS.COLOR.RED
	if (isBlack(name)) return CONSTS.COLOR.BLACK
	return CONSTS.COLOR.INVALID
}

const getType = (name) => {
	const redIndex = redNames.indexOf(name)
	if (redIndex >= 0) return redIndex

	const blackIndex = blackNames.indexOf(name)
	if (blackIndex >= 0) return blackIndex

	return CONSTS.TYPE.INVALID
}

const getName = ({color, type}) => {
	switch (color) {
	case CONSTS.COLOR.RED:
		return CONSTS.RED_NAMES[type]
	case CONSTS.COLOR.BLACK:
		return CONSTS.BLACK_NAMES[type]
	default:
		throw new Error('Wrong color: ' + color)
	}
	return null
}

export {
  validNames,
  isValid,
  isRed,
  isBlack,
  isSameColor,
  getColor,
  getType,
  getName
}
