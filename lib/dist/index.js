
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./searchframe.cjs.production.min.js')
} else {
  module.exports = require('./searchframe.cjs.development.js')
}
