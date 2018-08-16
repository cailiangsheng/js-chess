import { getType } from '../chess-man/util'
import _ from 'lodash'

const countNames = (names) => {
    return _.countBy(names, name => name)
}

const uniqNames = (names) => {
    const uniqNames = _.uniq(names)
    uniqNames.sort((name1, name2) => getType(name1) - getType(name2))
    return uniqNames
}

export {
    countNames,
    uniqNames
}