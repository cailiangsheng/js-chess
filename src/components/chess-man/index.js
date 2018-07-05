const ChessMan = ({name, isBlack}) => {
	return <div className={classNames('chess-man', {red: !isBlack, black: isBlack})}>
	  <span>{name}</span>
	</div>
}

ChessMan.propTypes = {
	name: React.PropTypes.string,
	isBlack: React.PropTypes.bool
}

ChessMan.defaultProps = {
	name: '帅',
	isBlack: false
}
