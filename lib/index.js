(function() {
  var isNode = typeof(window) === 'undefined',
      exports,
      util;

  if (isNode) {
    util = require('./ns');
    exports = module.exports;
  } else {
    util = Module;
    exports = Module;
  }

  exports.alert = util.require('alert');
  exports.ws = util.require('ws');
}());
