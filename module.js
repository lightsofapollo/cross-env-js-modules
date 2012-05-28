(function(global, module) {

  var paths = {};

  function Exports(path) {
    this.path = path;
  }

  Exports.prototype = {

    require: function exportRequire(path) {
      if (typeof(require) === 'undefined') {
        return paths[path];
      } else {
        return require(require('path').join(__dirname, path));
      }
    },

    set exports(val) {
      return paths[this.path] = val;
    },

    get exports(path) {
      return paths[path];
    }
  };

  function Module(path) {
    return new Exports(path);
  }

  Module.require = Exports.prototype.require;
  Module.exports = Module;


  module.exports = Module;

  if(this.window)
    window.Module = Module;

}(
  this,
  (typeof(module) === 'undefined')?
    {} :
    module
));
(function(module, ns) {

  module.exports = function(str) {
    console.log('!', str, '!');
  }

}.apply(
  this,
  (this.Module)?
    [Module('alert'), Module] :
    [module, require('./module')]
));
(function(module, ns) {
  var alert = ns.require('alert');

  function WS() {

  }

  WS.prototype = {
    alert: function() {
      alert('fooo');
    }
  };

  module.exports = WS;
}.apply(
  this,
  (this.Module)?
    [Module('ws'), Module] :
    [module, require('./module')]
));
(function(module, ns) {
  module.exports.alert = ns.require('alert');
  module.exports.ws = ns.require('ws');
}.apply(
  this,
  (this.Module)?
    [Module, Module] :
    [module, require('./module')]
));
