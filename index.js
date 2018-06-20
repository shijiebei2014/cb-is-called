const callsites = require('callsites')

const isProduction = () => {
  var isPrd = process.env.NODE_ENV || ''
  isPrd = isPrd.toLowerCase() === 'production'
}

const getMethodTrace = (sites) => {
    var methodNames = [],
        i = 1;
    while(sites[i] && sites[i].getFunctionName()) {
      methodNames.push(sites[i++].getFunctionName())
    }
    methodNames.reverse()
    methodNames.push('cb')
    return methodNames.join(':')
}

module.exports = (cb) => {
  var isPrd = isProduction()
  var methodNames = getMethodTrace(callsites())
  if (!isPrd) {
    console.log(methodNames + ' start')
  }
  return function() {
    cb.apply(this, Array.prototype.slice.call(arguments, 0))
    if (!isPrd) {
      console.log(methodNames + ' end')
    }
  }
}
