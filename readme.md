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

function haha () {
  test(true, function(data) {
    console.log('data:', data)
  })
}
haha()
```
