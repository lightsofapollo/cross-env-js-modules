(function(global) {
  var mod, util;
  
  if(global.Module) {
    mod = global.Module('ws');
    util = global.Module;
  } else {
    mod = module;
    util = require('./ns');
  }
  
  var alert = util.require('alert');

  function WS() {

  }

  WS.prototype = {
    alert: function() {
      alert('fooo');
    }
  };

  mod.exports = WS;
}(this));
