const _ = require('lodash')

items = [1, [2, [3, [4]]]]

newItems = _.flatMapDeep(items)
console.log(newItems);