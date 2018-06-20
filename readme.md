## Install

```
$ npm install --save cb-is-called
```


## Usage

```js
const wrap_cb = require('cb-is-called');

function test(a, cb) {
  cb = wrap_cb(cb)
  if (a) {
    cb(null)
  }
}

function called () {
  test(true, function(data) {
    console.log('data:', data)
  })
}

function uncalled () {
  test(false, function(data) {
    console.log('data:', data)
  })
}

called()
uncalled()
```
