const callsites = require('callsites')

const isProduction = () => {
  let isPrd = process.env.NODE_ENV || ''
  isPrd = isPrd.toLowerCase() === 'production'
}

const getMethodTrace = (sites) => {
    let methodNames = [],
        i = 1;
    while(sites[i] && sites[i].getFunctionName()) {
      methodName.push(sites[i++].getFunctionName())
    }
    methodName.reverse()
    methodName.push('cb')
    methodName = methodName.join(':')
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
