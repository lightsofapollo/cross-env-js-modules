(function() {

  var paths = {},
      isNode = typeof(window) === 'undefined';

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
  
  if (typeof(window) === 'undefined') {
    module.exports = Module;
  } else {
    window.Module = Module;
  }

}());
