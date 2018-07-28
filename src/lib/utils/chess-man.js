import CHESS_MAN from 'lib/consts/chess-man'

const redNames = CHESS_MAN.RED_NAMES
const blackNames = CHESS_MAN.BLACK_NAMES
const validNames = redNames.concat(blackNames)

const isValid = (name) => validNames.includes(name)
const isRed = (name) => redNames.includes(name)
const isBlack = (name) => blackNames.includes(name)

const isSameColor = (name1, name2) => {
	return isRed(name1) && isRed(name2)
		|| isBlack(name1) && isBlack(name2)
}

const getColor = (name) => {
	if (isRed(name)) return CHESS_MAN.COLOR.RED
	if (isBlack(name)) return CHESS_MAN.COLOR.BLACK
	return CHESS_MAN.COLOR.INVALID
}

const getType = (name) => {
	const redIndex = redNames.indexOf(name)
	if (redIndex >= 0) return redIndex

	const blackIndex = blackNames.indexOf(name)
	if (blackIndex >= 0) return blackIndex

	return CHESS_MAN.TYPE.INVALID
}

const getName = ({color, type}) => {
	switch (color) {
	case CHESS_MAN.COLOR.RED:
		return CHESS_MAN.RED_NAMES[type]
	case CHESS_MAN.COLOR.BLACK:
		return CHESS_MAN.BLACK_NAMES[type]
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
