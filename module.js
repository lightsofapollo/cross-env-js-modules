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
      alert('OK - Module loading works');
    }
  };

  module.exports = WS;
}.apply(
  this,
  (this.Module) ?
    [Module('ws'), Module] :
    [module, require('./module')]
));
(function(module, ns) {

  function Leaf() {
    console.log('! OK - Submodule loaded !');
  }

  module.exports = Leaf;
}.apply(
  this,
  (this.Module) ?
    [Module('sub/leaf'), Module] :
    [module, require('./module')]
));

(function(module, ns) {
  module.exports = {
    Leaf: ns.require('sub/leaf')
  };

}.apply(
  this,
  (this.Module) ?
    [Module('sub'), Module] :
    [module, require('./module')]
));
(function(module, ns) {
  module.exports.alert = ns.require('alert');
  module.exports.ws = ns.require('ws');
  module.exports.Sub = ns.require('sub');
}.apply(
  this,
  (this.Module)?
    [Module, Module] :
    [module, require('./module')]
));
